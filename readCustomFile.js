const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { customDecode } = require("./encodeNdecode");
// Define the file name and extension
const fileName = "myCustomFile.myext";

// let offset = 123;

// Set up readline to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for the offset
rl.question("Please enter the offset to decode the data: ", (offset) => {
  // Read the encoded data from the custom file
  fs.readFile(path.join(__dirname, fileName), "utf8", (err, encodedData) => {
    if (err) {
      console.error("Error reading the file:", err);
    } else {
      // Decode the data (using Base64 decoding in this example)
      const decodedData = customDecode(encodedData, offset);
      console.log("Decoded data:", decodedData);
    }
  });
  // Close the readline interface
  rl.close();
});