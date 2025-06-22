const fs = require("fs").promises;

const performFileOps = async () => {
  try {
    const data = await fs.readFile("sample.txt", "utf8");
    console.log("File content:", data);

    await fs.appendFile("sample.txt", "\nAppended via async/await!");
    console.log("Data appended successfully using async/await!");
  } catch (err) {
    console.error("Error:", err.message);
  }
};

performFileOps();
