const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const outDir = path.join(publicDir, 'images', 'optimized');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const sizes = [320, 640, 1024, 1600];

// Collect JPG/PNG files from public root and public/images
const collectFiles = () => {
  const candidates = new Set();
  const addFrom = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir)) {
      if (/\.(jpe?g|png)$/i.test(f)) candidates.add(path.join(dir, f));
    }
  };
  addFrom(publicDir);
  addFrom(imagesDir);
  return Array.from(candidates);
};

(async () => {
  const files = collectFiles();
  for (const full of files) {
    const f = path.basename(full);
    const name = path.parse(f).name;
    try {
      for (const w of sizes) {
        const out = path.join(outDir, `${name}-${w}.webp`);
        await sharp(full)
          .resize({ width: w })
          .webp({ quality: 75 })
          .toFile(out);
      }
      console.log(`Optimized ${f}`);
    } catch (err) {
      console.error(`Failed optimizing ${f}:`, err);
    }
  }
  console.log('Done');
})();
