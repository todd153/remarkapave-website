import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const dirs = ['./public/frames/hero', './public/frames/wash'];

for (const dir of dirs) {
  const files = readdirSync(dir).filter(f => f.endsWith('.jpg'));
  console.log(`Converting ${files.length} JPGs to WebP in ${dir}...`);

  for (const file of files) {
    const input = join(dir, file);
    const output = join(dir, file.replace('.jpg', '.webp'));

    sharp(input)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`✓ ${file}`))
      .catch(err => console.error(`✗ ${file}: ${err.message}`));
  }
}
