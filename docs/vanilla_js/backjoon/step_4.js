// https://www.acmicpc.net/problem/9498
// const fs = require("fs");

// const filepath =
//   process.platform === "lunux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

// let inputs = parseInt(fs.readFileSync(filepath).toString());

// if (inputs > 89) {
//   console.log("A");
// } else if (inputs > 79) {
//   console.log("B");
// } else if (inputs > 69) {
//   console.log("C");
// } else if (inputs > 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// // 제출
// const fs = require("fs");

// let inputs = parseInt(fs.readFileSync("/dev/stdin").toString());

// if (inputs > 89) {
//   console.log("A");
// } else if (inputs > 79) {
//   console.log("B");
// } else if (inputs > 69) {
//   console.log("C");
// } else if (inputs > 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// https://www.acmicpc.net/problem/2884
// const fs = require("fs");

// const filepath =
//   process.platform === "lunux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

// let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// let hour = inputs[0];
// let minnute = inputs[1];

// if (minnute < 15) {
//   hour = hour - 1;
//   minnute = minnute + 45;
// } else {
//   minnute = minnute - 15;
// }
// console.log(`${hour} ${minnute}`);
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let inputs = fs.readFileSync(filepath).toString().split(" ");

let hour = parseInt(inputs[0]);
let minnute = parseInt(inputs[1]);

if (minnute < 15) {
  hour = hour - 1;
  minnute = minnute + 45;
} else {
  minnute = minnute - 15;
}
console.log(`${hour} ${minnute}`);
