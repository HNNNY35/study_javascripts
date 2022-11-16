// const fs = require("fs");

// // let inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let readFileSync = fs.readFileSync("/dev/stdin");
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");

// console.log();

//체인룰,,,?? .readFileSync("/dev/stdin").toString().trim().split(" "); 이거 다 펑션임
// 체인방식이라고 해서 .다음.다음.. 이런 식으로 앞의 펑션이 동작한 다음 리턴값을 가지고 펑션이 동작함
// 저건 결국 4개의 펑션이 동작함
// fs는 처음에 시작하는 부분. fs는 class(괄호가 없으니까 펑션 ㄴㄴ)
// 리턴값이 있어야 저렇게 이어지는 거임. 순차적으로 동작

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

// let readFileSync = fs.readFileSync(filepath);
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");
// let inputs = splits.map(Number);

let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
// readFileSync : 파일을 input으로 받음
// filepath가 변수로 되어있는 이유 :  운영체제마다 받아들이는 형식이 다름. process.platform 이 운영체제를 앎
// lunux면 /dev/stdin을 읽고 그렇지 않으면(주로 윈도우) docs/vanilla_js/input.txt를 읽으세요
// toString : 값을 String 형식으로 바꿈

console.log(inputs[0] + inputs[1]);
