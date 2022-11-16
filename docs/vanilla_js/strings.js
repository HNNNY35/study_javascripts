// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second); // 값 : 35
// 숫자 + 문자 = 문자
// 숫자 - 문자 = 숫자
// 숫자 * 문자 = 숫자

// recommanded this way!
let concate_string = `${number_first}${string_second}`;

string_second = "A";
console.log(number_first + string_second); // 값 : 3A

// Strings
let animal = "tiger";
console.log(`${animal}`);

// js에서 문자 값을 넣을 때 '', "" => js에서는 동일하나 대부분은 '' 사용

let sentance = "  5 2 6  ";
let trims = sentance.trim(); // 공백 제거
let splits = trims.split(" "); // 공백으로 배열 만듬
let maps = splits.map(Number); // 각 배열을 String To Number

// splits는 string 배열, 연산을 위해 number로 한번에 바꾸는 방법

console.log(maps[0] + maps[1] + maps[2]); // 합산함

// 체인 펑션으로 변수 만들지 않고 한번에 하기
let inputs = sentance.trim().split(" ").splits.map(Number);
console.log(inputs[0] + inputs[1] + inputs[2]); // 합산함

console.log();
