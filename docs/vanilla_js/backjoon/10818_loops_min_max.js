// https://www.acmicpc.net/problem/10818

// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let min_num = inputs[0];
let max_num = inputs[0];

let statistics_obj = { min: min_num, max: max_num };

for (i = 0; i < inputs.length; i++) {
  if (statistics_obj["min"] > inputs[i]) {
    statistics_obj["min"] = inputs[i];
  }
  if (statistics_obj["max"] < inputs[i]) {
    statistics_obj["max"] = inputs[i];
  }
}

console.log(`${statistics_obj.min} ${statistics_obj.max}`);

// 제출
// let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const nums = inputs[1].split(" ").map(Number);

// let min_num = nums[0];
// let max_num = nums[0];

// let statistics_obj = { min: min_num, max: max_num };

// for (let i = 0; i < nums.length; i++) {
//   if (statistics_obj["min"] > nums[i]) {
//     statistics_obj["min"] = nums[i];
//   }
//   if (statistics_obj["max"] < nums[i]) {
//     statistics_obj["max"] = nums[i];
//   }
// }

// console.log(`${statistics_obj.min} ${statistics_obj.max}`);
