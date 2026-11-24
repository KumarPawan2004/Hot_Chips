const fs = require('fs');
const path = require('path');

// Only run on Windows where OneDrive NTFS Reparse Points exist
if (process.platform !== 'win32') {
  process.exit(0);
}

const targets = [
  path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'lib', 'recursive-delete.js'),
  path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'esm', 'lib', 'recursive-delete.js')
];

for (const targetFile of targets) {
  if (!fs.existsSync(targetFile)) continue;
  let content = fs.readFileSync(targetFile, 'utf8');
  if (content.includes('// ONEDRIVE_PATCH_APPLIED')) continue;

  const originalPattern = `const isSymlink = part.isSymbolicLink();
        if (isSymlink) {
            const linkPath = await _fs.promises.readlink(absolutePath);
            try {
                const stats = await _fs.promises.stat((0, _path.isAbsolute)(linkPath) ? linkPath : (0, _path.join)((0, _path.dirname)(absolutePath), linkPath));
                isDirectory = stats.isDirectory();
            } catch  {}
        }`;

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

  if (content.includes(originalPattern)) {
    content = content.replace(originalPattern, replacement);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log(`✅ Applied OneDrive readlink fix to ${path.relative(path.join(__dirname, '..'), targetFile)}`);
  }
}
