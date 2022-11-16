// variable Scope
// 변수를 선언한 후 커브 브라켓 {} 안에서 사용할 때와 밖에서 사용할 때의 차이점

var var_first = 1;
let let_first = 10;

//``넣으면 string처럼 동작함. ${}(머스테시)는 안에 변수 넣으면 변수 출력
{
  console.log(`In var_first ${let_first}`);
  let let_second = 20;
  console.log(`In let_second ${let_second}`);
}
console.log(`Out var_first ${let_first}`);
// console.log(`Out let_second ${let_second}`); // 에러 : 영역 밖에서 사용하려했기 때문

// chekct typeof : 자바스크립트는 변수를 선언할 때 변수의 타입이 값을 넣을 때마다 바뀜.
// 변수의 타입을 확인하는 것

typeof let_first;
console.log(`typeof let_first : ${typeof let_first}`); // 데이터타입 : number
let_first = "good";
console.log(`typeof let_first : ${typeof let_first}`); // 데이터타입 : string

console.log();
