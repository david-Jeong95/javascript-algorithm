var fs = require("fs");
let path = require("path");

const input = fs.createReadStream("./bigfile.txt");
// // 대용량 파일 쓰기

function change(data) {
  data = data.toString();
  let splidata = data.replace(/\s+$/g, "").split(" ");

  //   console.log(splidata);
  const fMap = new Map();
  splidata.forEach((element) => {
    if (!fMap.has(element)) {
      fMap.set(element, 1);
    } else {
      fMap.set(element, fMap.get(element) + 1);
    }
  });
  console.log(fMap.get("both"));
  return fMap;
}

const saveFileName = path.join("./", "fsappoutput");
const writer = fs.createWriteStream(saveFileName);
input.on("data", function (data) {
  //   console.log(data.toString());
  const result = change(data);

  writer.write(JSON.stringify([...result]), (err, data) => {
    if (err) console.log("error", err);
  });
});
