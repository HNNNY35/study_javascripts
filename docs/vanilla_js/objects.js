// let animal = {key:value, key:value, key:value};

let animal = { name: "juju", species: "cat" };

console.log(animal.name);

let animal_keys = Object.keys(animal);

for (let key of animal_keys) {
  //   animal[key];  //  animal['name'], animal['species']와 똑같음
  console.log(`${key} : ${animal[key]}`);
}

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

//animal에서 key만 가져오는 방법 : Object.keys(animal)
//animal에서 value 가져오는 방법 : Object.values(animal)
