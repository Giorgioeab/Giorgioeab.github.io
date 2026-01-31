
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

const filesToConvert = [
    'portfolio_screenshot_pt_br.png',
    'portfolio_screenshot_en.png',
    'portfolio_screenshot_es.png',
    'projeto2_print1.png',
    'profilePhoto.png'
];

async function convertImages() {
    console.log(`Scanning ${assetsDir}...`);

    for (const file of filesToConvert) {
        const inputPath = path.join(assetsDir, file);
        if (fs.existsSync(inputPath)) {
            const outputPath = inputPath.replace('.png', '.webp');
            console.log(`Converting ${file} to WebP...`);

            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`✅ Created ${path.basename(outputPath)}`);
            } catch (error) {
                console.error(`❌ Error converting ${file}:`, error);
            }
        } else {
            console.warn(`⚠️ File not found: ${file}`);
        }
    }
}

convertImages();
