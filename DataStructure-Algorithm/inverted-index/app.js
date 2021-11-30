const fs = require("fs");

// 대용량 파일 읽기
const input = fs.createReadStream("./bigfile.txt");
// // 대용량 파일 쓰기
const writer = fs.createWriteStream("Bigfile.txt");
input.on("data", function (data) {
  console.log("read:" + data.toString());
  writer.write(data, (err, data) => {
    if (err) console.log("error", err);
  });
});

// writer.end("sold out");
// writer.on("finish", function () {
//   console.log("finish");
// });
// for (var i = 0; i < 1000; i++) {
//   writer.write("banana, #" + i + "\n");
// }
