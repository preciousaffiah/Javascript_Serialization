 function customEncode(data, offset) {
    console.log(`${offset}`);
  return data
    .split("")
    .map((char) => char.charCodeAt(0) + offset)
    .join(" ");
}

 function customDecode(data, offset) {
    console.log(offset);
  return data
    .split(" ")
    .map((code) => String.fromCharCode(code - `${offset}`))
    .join("");
}

module.exports = { customEncode, customDecode };
