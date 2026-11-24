const fs = require('fs');
const path = require('path');

const targets = [
  path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'lib', 'recursive-delete.js'),
  path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'esm', 'lib', 'recursive-delete.js')
];

for (const targetFile of targets) {
  if (!fs.existsSync(targetFile)) continue;
  let content = fs.readFileSync(targetFile, 'utf8');
  if (content.includes('// ONEDRIVE_PATCH_APPLIED')) continue;

  const regex = /(const isSymlink = part\.isSymbolicLink\(\);[\s\S]*?const linkPath = await _fs\.promises\.readlink\(absolutePath\);[\s\S]*?catch\s*\{[\s\S]*?\})/;
  const replacement = `// ONEDRIVE_PATCH_APPLIED
        let isSymlink = part.isSymbolicLink();
        if (isSymlink) {
            try {
                const linkPath = await _fs.promises.readlink(absolutePath);
                const stats = await _fs.promises.stat((0, _path.isAbsolute)(linkPath) ? linkPath : (0, _path.join)((0, _path.dirname)(absolutePath), linkPath));
                isDirectory = stats.isDirectory();
            } catch (err) {
                isSymlink = false;
            }
        }`;

  if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log(`✅ Applied OneDrive readlink fix to ${path.relative(path.join(__dirname, '..'), targetFile)}`);
  }
}
