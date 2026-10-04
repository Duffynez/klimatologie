import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

// Own implementation of TEOS-10 Appendix E, equations E.2.3–E.2.6.
// Restricted to PSS-78's original range. This is not the full GSW library.
const polynomial = (coefficients, x) => coefficients.reduceRight((sum, c) => sum * x + c, 0);

export function practicalSalinity(conductivitySm, temperature90C, seaPressureDbar) {
  if (![conductivitySm, temperature90C, seaPressureDbar].every(Number.isFinite)) {
    throw new Error("Non-finite conductivity, temperature or pressure");
  }
  const t68 = temperature90C * 1.00024;
  if (conductivitySm <= 0 || t68 < -2 || t68 > 35 || seaPressureDbar < 0 || seaPressureDbar > 10000) {
    throw new Error("Inputs outside the supported PSS-78 range");
  }
  const R = conductivitySm / 4.2914;
  const rt = polynomial([0.6766097, 0.0200564, 0.0001104259, -0.00000069698, 0.0000000010031], t68);
  const Rp = 1 + seaPressureDbar * (2.070e-5 + seaPressureDbar * (-6.370e-10 + seaPressureDbar * 3.989e-15))
    / (1 + 0.03426 * t68 + 0.0004464 * t68 ** 2 + (0.4215 - 0.003107 * t68) * R);
  const Rt = R / (Rp * rt);
  const x = Math.sqrt(Rt);
  const SP = polynomial([0.0080, -0.1692, 25.3851, 14.0941, -7.0261, 2.7081], x)
    + (t68 - 15) / (1 + 0.0162 * (t68 - 15))
    * polynomial([0.0005, -0.0056, -0.0066, -0.0375, 0.0636, -0.0144], x);
  if (!Number.isFinite(SP) || SP <= 2 || SP >= 42) throw new Error("Salinity outside the supported PSS-78 range");
  return { SP, t68, R, rt, Rp, Rt };
}

export function conductivityFromFrequency(frequencyKhz, temperature90C, seaPressureDbar, coefficients) {
  const { g, h, i, j, CTcor, CPcor } = coefficients;
  if (![frequencyKhz, temperature90C, seaPressureDbar, g, h, i, j, CTcor, CPcor].every(Number.isFinite)
    || frequencyKhz <= 0) throw new Error("Invalid signal or calibration coefficients");
  // NOAA OAR AOML-51, printed p. 13: f is in kHz, output in S/m.
  // The certificate's printed formula omits factor 10. Its table and NOAA agree with this one.
  return (g + h * frequencyKhz ** 2 + i * frequencyKhz ** 3 + j * frequencyKhz ** 4)
    / (10 * (1 + CTcor * temperature90C + CPcor * seaPressureDbar));
}

export function parseCalibration(text) {
  const [header, ...lines] = text.trim().split(/\r?\n/);
  if (header !== "step,temperature_its90_c,bath_practical_salinity,bath_conductivity_s_m,frequency_khz,instrument_conductivity_s_m,reported_residual_s_m"
    || lines.length !== 7) throw new Error("Unexpected columns or row count");
  return lines.map((line, index) => {
    const cells = line.split(",");
    if (cells.length !== 7 || cells.some((c) => !/^-?\d+(?:\.\d+)?$/.test(c))) throw new Error("Invalid numerical data");
    const [step, temperatureC, bathSP, bathSm, frequencyKhz, instrumentSm, residualSm] = cells.map(Number);
    if (step !== index + 1 || frequencyKhz <= 0) throw new Error("Invalid sequence or frequency");
    if (Math.abs(instrumentSm - bathSm - residualSm) > 0.0000151) throw new Error("Residual disagrees with certificate");
    if (step === 1 ? [temperatureC, bathSP, bathSm, instrumentSm, residualSm].some((v) => v !== 0)
      : bathSP <= 2 || bathSP >= 42 || bathSm <= 0 || instrumentSm <= 0) throw new Error("Invalid reference values");
    return { step, temperatureC, bathSP, bathSm, frequencyKhz, instrumentSm, residualSm };
  });
}

export function reproduceCalibration(text, metadata) {
  const records = parseCalibration(text);
  const rows = records.slice(1).map((r) => {
    const calculatedSm = conductivityFromFrequency(r.frequencyKhz, r.temperatureC, metadata.seaPressureDbar, metadata.coefficients);
    const converted = practicalSalinity(calculatedSm, r.temperatureC, metadata.seaPressureDbar);
    // Printed frequencies and coefficients are rounded. This tolerance checks transcription,
    // not the uncertainty of a field measurement.
    if (Math.abs(calculatedSm - r.instrumentSm) > 0.00002) throw new Error("Recomputed conductivity disagrees with printed instrument value");
    return { ...r, calculatedSm, ...converted };
  });
  return { recordCount: records.length, selectedCount: rows.length, excludedStep: 1,
    zeroPoint: records[0], rows, selected: rows[2],
    conductivityRatio: rows.at(-1).calculatedSm / rows[0].calculatedSm,
    salinityRange: [Math.min(...rows.map((r) => r.SP)), Math.max(...rows.map((r) => r.SP))] };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const metadata = JSON.parse(await readFile(new URL("example.json", import.meta.url), "utf8"));
  const bytes = await readFile(new URL("calibration.csv", import.meta.url));
  if (createHash("sha256").update(bytes).digest("hex") !== metadata.csvSha256) throw new Error("CSV checksum mismatch");
  console.log(JSON.stringify(reproduceCalibration(bytes.toString("utf8"), metadata), null, 2));
}
