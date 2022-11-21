// 2022/11/18 - 4교시

// 콜백은 특정 항목으로 들어갔을 때 추가적으로 수행되어야하는 사항을 얘기함. 순서가 정해져있음.
// 읽기는 하지만 실행되는 순서를 늦출 수 있음 => setTimeout이라는 펑션.

console.log(`first`);

// console.log(`second`);
// function (){
// }
setTimeout(function () {
  console.log(`setTimeout : second`);
}, 2000);
console.log(`third`);

// 실행 결과 : first, third 출력 후 setTimeout 출력

// // 펑션을 넣어줬을때 그걸 가지고서 동작하는 펑션을 만들기(펑션에 펑션 넣기)
// // 5 + 6
// function plus(first, second) {
//   return first + second;
// }
// // plus(5, 6);

// // 5 - 6
// function minus(first, second) {
//   return first - second;
// }
// // minus(5, 6);

// // 파라메터의 callback은 펑션
// function callbackFunction(callback, first, second) {
//   let result = callback(first, second);
//   console.log(`result : ${result}`);
// }

// callbackFunction(plus, 5, 6);
// callbackFunction(minus, 5, 6);
