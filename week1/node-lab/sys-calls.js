const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("there is error", err);
  } else {
    console.log(`File content: \n${data}`);
  }
});

fs.writeFile("output.txt", "This is some sample data.", (err) => {
  if (err) {
    console.error("Error writing file: ", err);
  } else {
    console.log("Data written to output.txt");
  }
});
