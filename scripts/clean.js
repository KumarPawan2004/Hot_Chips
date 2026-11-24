const fs = require('fs');
const path = require('path');

const nextDir = path.join(__dirname, '..', '.next');

if (fs.existsSync(nextDir)) {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('✅ Cleaned .next directory');
  } catch (err) {
    // Ignore busy locks on Windows if files are temporarily in use
  }
}
