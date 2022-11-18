// https://www.acmicpc.net/problem/18108

//입력
// 서기 연도를 알아보고 싶은 불기 연도 y가 주어진다. (1000 ≤ y ≤ 3000)

// 출력
// 불기 연도를 서기 연도로 변환한 결과를 출력한다.

// 입력한 연도에서 543을 뺀 연도를 출력

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let input = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);

console.log(`${input - 543}`);
