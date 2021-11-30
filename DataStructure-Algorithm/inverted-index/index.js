var fs = require("fs");

fs.readFile("readMe.txt", "utf8", (err, data) => {
  console.log(data);
  fs.writeFile("writeMe.txt", data, (err, data) => {
    if (err) console.log("error", err);
  });
});

console.log("test");
