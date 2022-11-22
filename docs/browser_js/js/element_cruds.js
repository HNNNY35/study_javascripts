// div.inner 태그 내부에 <div>hello</div>를 추가
// 방법 1 : create Element
// 두가지 방법의 차이 : 이벤트(onclick) 적용 시 차이
let queryInner = document.querySelector("#container > .inner"); // 유일한걸 찾는게 좋기 때문에 컨테이너로 접근
let element = document.createElement("div"); // div 껍데기부터 만듬
let helloText = document.createTextNode("hello"); // 특정한 값(hello)로 text 만듬
// 각각 만든 element와 text를 순서대로 결합시켜주기 => appendChild
element.appendChild(helloText);
queryInner.appendChild(element);

// 방법 2 : innerHTML
let animal = { name: "dog", age: 10 };
// app에 animal 넣기
let queryApp = document.querySelector("#app");

let item = "<div class='item'>" + animal["name"] + animal["age"] + "</div>";
item = `<div class="item">${animal["name"]} ${animal["age"]}</div>`;

queryApp.innerHTML = item;

const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let queryList = document.querySelector("#list");

productsData.forEach((product, index) => {
  let productList = `<div>${product["title"]} ${product["weight"]}</div>`;
  queryList.innerHTML += productList;
});
