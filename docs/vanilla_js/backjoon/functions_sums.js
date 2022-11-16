// https://www.acmicpc.net/problem/15596

// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let sum = sum_arr(inputs);
console.log(`${sum}`);

function sum_arr(arr) {
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += inputs[i];
  }
  return sum;
}
