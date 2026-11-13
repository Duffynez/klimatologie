// Klimatologie.eu, 2026. CC BY 4.0. Node.js, bez dalších knihoven.
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export function calculate() {
  const lines = readFileSync(new URL('./flanner-2011-tabulka-2.csv', import.meta.url), 'utf8').trim().split(/\r?\n/);
  const rows = lines.slice(1).map(line => {
    const [atmosphere, contrast, delta, snow] = line.split(',');
    return { atmosphere, contrast, deltaWm2: Number(delta), snowPercent: Number(snow) };
  });
  const meanWm2 = rows.reduce((sum, row) => sum + row.deltaWm2, 0) / rows.length;
  const lowExampleWm2 = (1 - 0.8) * 200;
  const highExampleWm2 = (1 - 0.2) * 200;
  return {
    rows, meanWm2, minWm2: Math.min(...rows.map(row => row.deltaWm2)), maxWm2: Math.max(...rows.map(row => row.deltaWm2)),
    example: { incomingWm2: 200, firstAlbedo: 0.8, secondAlbedo: 0.2, lowWm2: lowExampleWm2, highWm2: highExampleWm2, differenceWm2: highExampleWm2 - lowExampleWm2 },
  };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) console.log(JSON.stringify(calculate(), null, 2));
