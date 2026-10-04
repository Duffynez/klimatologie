import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

// Own transcription of the numerical table in the Sea-Bird certificate.
// This reconstructs residuals from printed pressures, not the sensor polynomial.
const header = "step,reference_psia,frequency_hz,internal_temperature_c,instrument_psia,corrected_psia,reported_residual_psi";
export const psiToDbar = 0.689476; // Conversion used in the SBE 9plus manual.

export function parseCalibration(text) {
  const [first, ...lines] = text.trim().split(/\r?\n/);
  if (first !== header || lines.length !== 11) throw new Error("Unexpected columns or row count");
  return lines.map((line, index) => {
    const cells = line.split(",");
    if (cells.length !== 7 || cells.some((cell) => !/^-?\d+(?:\.\d+)?$/.test(cell))) {
      throw new Error(`Invalid numerical data at row ${index + 1}`);
    }
    const values = cells.map(Number);
    if (values.some((value) => !Number.isFinite(value))) throw new Error("Non-finite data");
    const [step, referencePsia, frequencyHz, internalTemperatureC, instrumentPsia, correctedPsia, reportedResidualPsi] = values;
    if (step !== index + 1 || referencePsia <= 0 || frequencyHz <= 0 || instrumentPsia <= 0 || correctedPsia <= 0) {
      throw new Error("Invalid sequence or absolute pressure/frequency");
    }
    const beforePsi = instrumentPsia - referencePsia;
    const afterPsi = correctedPsia - referencePsia;
    // Three pressure columns were printed to 0.001 psi. Allow their rounding.
    if (Math.abs(afterPsi - reportedResidualPsi) > 0.0015) throw new Error("Residual disagrees with certificate");
    return { step, referencePsia, frequencyHz, internalTemperatureC, instrumentPsia, correctedPsia,
      reportedResidualPsi, referenceDbar: referencePsia * psiToDbar,
      beforeDbar: beforePsi * psiToDbar, afterDbar: afterPsi * psiToDbar };
  });
}

export function summarizeCalibration(text) {
  const rows = parseCalibration(text);
  return {
    rowCount: rows.length,
    maxAbsBeforeDbar: Math.max(...rows.map((row) => Math.abs(row.beforeDbar))),
    maxAbsAfterDbar: Math.max(...rows.map((row) => Math.abs(row.afterDbar))),
    selected: rows[7],
    illustrativeHeightPerHpaM: 100 / (1000 * 9.80665),
    // Constant-density fresh water, illustrative equivalent only, not a measured depth.
    illustrativeResidualHeightM: Math.abs(rows[7].afterDbar) * 10000 / (1000 * 9.80665),
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const metadata = JSON.parse(await readFile(new URL("example.json", import.meta.url), "utf8"));
  const bytes = await readFile(new URL("calibration.csv", import.meta.url));
  if (createHash("sha256").update(bytes).digest("hex") !== metadata.csvSha256) {
    throw new Error("CSV checksum does not match the published transcription");
  }
  console.log(JSON.stringify(summarizeCalibration(bytes.toString("utf8")), null, 2));
}
