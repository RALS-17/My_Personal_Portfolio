const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'assets', 'certificates');

function findDates(buffer) {
  const text = buffer.toString('latin1');
  const results = {};
  const creation = text.match(/CreationDate\s*\(D:(\d{4})(\d{2})(\d{2})/);
  const mod = text.match(/ModDate\s*\(D:(\d{4})(\d{2})(\d{2})/);
  const anyD = text.match(/D:(\d{4})(\d{2})(\d{2})/);
  if (creation) results.creation = `${creation[1]}-${creation[2]}-${creation[3]}`;
  if (mod) results.mod = `${mod[1]}-${mod[2]}-${mod[3]}`;
  if (!results.creation && anyD) results.any = `${anyD[1]}-${anyD[2]}-${anyD[3]}`;
  // Search for common textual date formats too (e.g., March 4, 2026)
  const textual = text.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}/);
  if (textual) results.text = textual[0];
  return results;
}

const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.pdf'));

const out = [];
for (const file of files) {
  const p = path.join(dir, file);
  try {
    const buffer = fs.readFileSync(p);
    const dates = findDates(buffer);
    out.push({ file, dates });
  } catch (e) {
    out.push({ file, error: e.message });
  }
}

console.log(JSON.stringify(out, null, 2));
