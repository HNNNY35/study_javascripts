const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal
for (i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for Iterable
for (let animal of animals) {
  console.log(`${animal}`);
}

// let animal = {key:value, key:value, key:value};

let animal = { name: "juju", species: "cat" };

console.log(animal.name);
console.log();

const animals_obj = [
  animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

// 리스트 자체에 오브젝트가 들어간 형식. 가장 많이 씀.
// 오브젝트를 리스트로 묶음
// => db할때 했던 resultSet(해당하는 컬럼 네임으로 값을 끌어옴)과 동일하게
// 키와 밸류로 해당하는 값을 가져올 수 있고 그걸 loop로 돌리면 됨

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
  cars[0];
}
// cars => foreach
cars.forEach((car) => console.log(`${car}`));

cars.forEach((car) => {
  console.log(`${car}`);
});
// 굳이 펑션을 따로 선언하지 않고 사용하는 경우가 많음
// 데이터타입이 array인 경우 forEach 사용 가능!

// forEach : 이렇게 사용하는 경우가 대부분
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
// 특정 펑션에서 파라메타가 콜백 펑션이 들어가고 그걸 배치할 수 있구나

// 이렇게 작성하는게 좋음!!!!!
// Arrow Function : arrow를 기준으로 앞부분은 파라메터
// 이게 위에 단순화되어 들어가 있는 것임
let arrowFunction = (element) => {
  console.log(element);
};
array1.forEach(arrowFunction);

// Normal Function
function normalFunction(element) {
  console.log(element);
}
