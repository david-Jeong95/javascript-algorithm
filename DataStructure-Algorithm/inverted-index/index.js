// var fs = require("fs");

// fs.readFile("readMe.txt", "utf8", (err, data) => {
//   console.log(data);
//   fs.writeFile("writeMe.txt", data, (err, data) => {
//     if (err) console.log("error", err);
//   });
// });

// console.log("test");
var fs = require("fs");
let path = require("path");

// const savePath = path.join(__dirname, "path1", "path2");
// const saveFileName = path.join(savePath, "testfile");
// // const saveData = {name:"abc",age:30};
// const saveData = ["저장", "방법", ["중간", "꼽사리"], "parse", "JSON"];
// if (!fs.existsSync(savePath)) {
//   fs.mkdirSync(savePath, { recursive: true });
// }
// fs.writeFileSync(saveFileName, JSON.stringify(saveData));

// const readData = fs.readFileSync(saveFileName);
// console.log("readData : ");
// console.log(JSON.parse(readData.toString()));

const saveFileName = path.join("./", "testyfile");
// const saveData = {name:"abc",age:30};
const saveData = ["저장", "방법", ["중간", "꼽사리"], "parse", "JSON"];

fs.writeFileSync(saveFileName, JSON.stringify(saveData));

const readData = fs.readFileSync(saveFileName);
console.log("readData : ");
console.log(JSON.parse(readData.toString()));

// fs.readFile("readMe.txt", "utf8", (err, data) => {
//   console.log(data);

//   let b = data.split(" ");
//   console.log(b);

//   fs.writeFile("writeMe.txt", data, (err, data) => {
//     if (err) console.log("error", err);
//   });
// });

//console.log("test");
