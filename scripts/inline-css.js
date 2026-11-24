const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const indexPath = path.join(outDir, 'index.html');
const cssDir = path.join(outDir, '_next', 'static', 'css');

if (!fs.existsSync(indexPath)) {
  console.log('out/index.html not found, skipping inline CSS.');
  process.exit(0);
}

let compiledCss = '';
if (fs.existsSync(cssDir)) {
  const files = fs.readdirSync(cssDir);
  for (const file of files) {
    if (file.endsWith('.css')) {
      compiledCss += fs.readFileSync(path.join(cssDir, file), 'utf8') + '\n';
    }
  }
}

let html = fs.readFileSync(indexPath, 'utf8');

if (compiledCss && !html.includes('id="inlined-tailwind-css"')) {
  const styleTag = `<style id="inlined-tailwind-css">\n${compiledCss}\n</style>`;
  html = html.replace('</head>', `${styleTag}\n</head>`);
}

// Support both file:// opening and web server hosting by fixing root-relative paths
html = html.replace(/href="\/_next\//g, 'href="./_next/');
html = html.replace(/src="\/_next\//g, 'src="./_next/');
html = html.replace(/href="\/images\//g, 'href="./images/');
html = html.replace(/src="\/images\//g, 'src="./images/');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('✅ Inlined CSS and configured relative paths in out/index.html successfully!');
