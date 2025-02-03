// Import the 'fs' module to work with files
const fs = require('fs');

// Read the file asynchronously (non-blocking)
fs.readFile('content.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('📄 File Content:\n', data);
});
