// js에서 펑션 만드는 방법 1 : 기본적인 순서
// function name(parameter1, parameter2) {
// code to be excuted
// return
// }

// param : 2(1,3), return 1(1+3)
function sum(item_first, item_second) {
  return item_first + item_second;
}

{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 6 + 8;

  let sum_function = sum(1, 2); // item_first = 1, item_second = 2와 같음
  console.log();
}

// 방법 2 : Anonymous Function
// 함수에 이름이 없으면 호출이 불가능 => 변수에 담아주기
// 이름을 변수에 담았을 뿐이지 함수처럼 파라메터 똑같이 넣을 수 있음
let calculateSum = function (item_first, item_second) {
  return item_first + item_second;
};
// 사용
console.log(`${calculateSum(5, 7)}`);

// 방법 3 : Arrow Function : js에서 가장 많이 사용하는 방식
// 화살같은 기호를 사용해서 함수를 만듬
let calculateSumSecond = (item_first, item_second) => {
  return item_first + item_second;
};
//사용
{
  let result = calculateSumSecond(7, calculateSum);
  console.log(`${result}`);
  console.log(`${calculateSumSecond(7, 8)}`);
}

// rest parameters
// 가변적으로 값을 넣을 수 있음
function printRestParams(...args) {
  let restParam = (arg) => {
    if (typeof arg == "object") {
    }
    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, 4, 5, 6, 7);
}
