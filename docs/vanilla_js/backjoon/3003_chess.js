// https://www.acmicpc.net/problem/3003

// 체스는 총 16개의 피스를 사용하며,
// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성

// 입력
// 첫째 줄에 동혁이가 찾은 흰색 킹, 퀸, 룩, 비숍, 나이트, 폰의 개수가 주어진다.
// 이 값은 0보다 크거나 같고 10보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 입력에서 주어진 순서대로 몇 개의 피스를 더하거나 빼야 되는지를 출력한다.
// 만약 수가 양수라면 동혁이는 그 개수 만큼 피스를 더해야 하는 것이고, 음수라면 제거해야 하는 것이다.

// 1-0 = 1 => +1
// 1-2 = -1 => -1
// 1-3 = -2 => -2

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let king = 1 - inputs[0];
let queen = 1 - inputs[1];
let rook = 2 - inputs[2];
let bishop = 2 - inputs[3];
let knight = 2 - inputs[4];
let pawn = 8 - inputs[5];

console.log(`${king} ${queen} ${rook} ${bishop} ${knight} ${pawn}`);
