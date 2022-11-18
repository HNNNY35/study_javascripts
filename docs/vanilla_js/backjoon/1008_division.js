// https://www.acmicpc.net/problem/1008
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let first_number = inputs[0];
let second_number = inputs[1];

console.log(`${first_number / second_number}`);
