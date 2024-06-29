const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { customEncode } = require('./encodeNdecode');

dotenv.config()

// Define the file name and extension
const fileName = 'myCustomFile.myext';

// Define the data to write
const data = 'This is some secret data that should not be readable by regular apps.';

const offset = 123
const encodedData =customEncode(data, offset);

// Write the encoded data to the custom file
fs.writeFile(path.join(__dirname, fileName), encodedData, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`Data successfully written to ${fileName}`);
  }
});