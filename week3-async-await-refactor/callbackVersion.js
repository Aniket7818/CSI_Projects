const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  console.log("File content:", data);

  fs.appendFile("sample.txt", "\nAppended via callback!", (err) => {
    if (err) {
      console.error("Error appending:", err.message);
      return;
    }

    console.log("Data appended successfully using callback!");
  });
});
