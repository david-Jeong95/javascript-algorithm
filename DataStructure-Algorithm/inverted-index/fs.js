const fs = require("fs");
let path = require("path");
const process = require("process");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

const saveFileName = path.join("./", "fswrite");

function main() {
  const ws = fs.createWriteStream(saveFileName);
  const ar = readLine().replace(/\s+$/g, "").split(" ");
  const result = simpleArraySum(ar);

  ws.write(result + "\n");

  ws.end();
}
