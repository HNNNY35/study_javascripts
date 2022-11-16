// Array == ArrayList
let fruits = ["apple", "banana", "orange", "melon"];
let numbers = [1, 2, 3, 4, 5];
// array에 들어갈 값을 임의로 정했음.

let fruits_init = new Array();
fruits_init = [];
// array에 값을 그때그때 넣기 위해서는 초기화만 해두기

// object == HashMap
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "melon"];
// js에서는 Array에 들어가는 자료형이 한가지 타입이 아니어도 됨

let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
// object도 들어갈 수 있음

let mixins_third = [1, 2, 3, "banana", objects];
// 변수이름으로 object 넣을 수도 있음

let mixins_fourth = [fruits, numbers];
// 이 리스트 안에는 fruits와 number 리스트가 들어있음

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

// 2차원 배열에서 indexOf 사용해서 melon 찾기
let first = ["apple", "banana"];
let second = ["orange", "melon"];
let third = ["berry", "strawberry"];

let mixins_list = [first, second, third];
// 여기엔 3개의 인덱스가 있음
// mixins_list[1][1]
// 'melon'
// mixins_list[1].indexOf('melon')
// 1

console.log();
