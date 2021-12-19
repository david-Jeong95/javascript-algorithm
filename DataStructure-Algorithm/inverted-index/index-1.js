var fs = require("fs");
let path = require("path");

fs.readFile("readMe.txt", "utf8", (err, data) => {
  let b = data.split(" ");
  let obj = {};
  for (let el in b) {
    // console.log(b[el]);
    if (b[el].indexOf(".\n") !== -1) {
      //b[el] = b[el].substring(0, b[el].indexOf(".\n"));
      //b[el].substring(b[el].indexOf(".\n") + 2);
      b[el] = b[el].split(".\n");
    } else {
      for (let el in b) {
        obj[b[el]] = obj[b[el]] ? obj[b[el]] + 1 : 1;
      }
    }
  }
  console.log("data", data);
  console.log(obj);
  console.log(b);

  const saveFileName = path.join("./", "testfile");
  //const saveData = { name: "abc", age: 30 };

  fs.writeFileSync(saveFileName, JSON.stringify(obj));
  const readData = fs.readFileSync(saveFileName);
  console.log("readData : ");
  console.log(JSON.parse(readData.toString()));
  //   fs.writeFile("writeMe.txt", data, (err, data) => {
  //     if (err) console.log("error", err);
  //   });
});
