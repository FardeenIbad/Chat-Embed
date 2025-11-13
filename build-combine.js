import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// Read the main JS file
const jsPath = join('dist', 'widget.iife.js');
const jsContent = readFileSync(jsPath, 'utf-8');

// Read the CSS file if it exists
const cssPath = join('dist', 'assets', 'style.css');
let finalContent = jsContent;

if (existsSync(cssPath)) {
  const cssContent = readFileSync(cssPath, 'utf-8');
  // Prepend the CSS injection code to the JS
  finalContent = cssContent + '\n' + jsContent;
}

// Write the combined file
const outputPath = join('dist', 'widget.js');
writeFileSync(outputPath, finalContent);

console.log('✓ Combined build created: dist/widget.js');
console.log(`  Size: ${(finalContent.length / 1024).toFixed(2)} KB`);
