// 이름으로 선택하는 방식들
let pByTagName = document.getElementsByTagName("p");
console.log(`${pByTagName}`);
// buttonByTagName.innerHTML = "클릭하세요!";

// 클래스는 여러개에 줄 수 있어서 복수. list 받을때는 배열로 받게 됨
let listByClassName = document.getElementsByClassName("list");
console.log(`${listByClassName}`);

// id는 하나만 줄 수 있어서 단수로 떨어짐
let titleById = document.getElementById("title");
titleById.innerHTML = "Title By Id";

let elementById = document.getElementById("selector");
// console.log(`elementById : ${elementById}`);
elementById.innerHTML = "<b>Change selector</b>";

// 권장 : 쿼리셀렉터(CSS할때 가장 많이 접근하는 방식) document.querySelector
// CSS에서 사용했던 기호 : 태그는 그냥 태그이름, id는 #, 클래스는 .
let queryTitle = document.querySelector("#title");
queryTitle.innerHTML = "DOM";

// 복수로 가져오고 싶을 때 : querySelectorAll
let queryItems = document.querySelectorAll(".item");

// queryItems는 array. queryItems를 콘솔창에 하나씩 출력해보기
// 1 - forEach(arrow Function)
// queryItems.forEach((item, index) => {
//   console.log(item);
// });

// 쿼리셀렉터로 단수와 복수로 가져오기
let queryLists = document.querySelectorAll(".list");
// 사이즈 : list 두개가 나옴 => All : 해당되는 셀렉터의 모든 것을 가져옴

let queryList = document.querySelector(".list");
// 사이즈 : list 하나만 나옴 => 처음 만나는 것만 가져옴

// 쿼리셀렉터로 가져옴 ul 안의 li를 찍기 위해서는 쿼리셀렉터를 또 해줘야 함
queryList.querySelector(".item"); // => 하나의 li만 나옴
queryList.querySelectorAll(".item"); // => 4개의 li가 나옴

// 위에서부터 다 쿼리셀렉터만 써서 출력해보기

var button = document.getElementById("btn");
button.addEventListener("click", function () {
  button.innerHTML = "클릭 후";
  button.style.color = "red";
});

// change properties from querySelector
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255, 0, 0, 0.5)";

let queryContent = document.querySelector("#contentId");
// queryContent.value = "Apple"; // value값이 Apple로 변경
// 값을 가져다가 사용하는건 서블렛 할 때
