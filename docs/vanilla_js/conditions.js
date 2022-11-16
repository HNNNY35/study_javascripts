let num = 5;

if (20 > num || 20 < num) {
  console.log("print!");
}

// 20 > num || 20 < num
// true
// print!

if (20 < num) {
  console.log(`20 < ${num}`);
} else if (20 > num) {
  console.log(`20 > ${num}`);
} else {
  console.log(`done`);
}

// 20 < num
// false
// 20 > num
// true
// 20 > 5

// 삼항연산자 (Ternay operator)
let condition = 20 < num ? `20 < ${num}` : `done`;

console.log();
