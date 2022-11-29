// querySelector => 인스턴스화
let querySingle = document.querySelector("#single");

// JS에서 addEventListener는 자바의 new와 비슷함
// 클릭이라는 펑션을 포함시켜줌
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});

function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event";
}

let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

// 페이지에 들어와서 클릭하지 않아도 입력가능하도록 focus
// 특정 엘리먼트에 걸어도 되고 바디태그에 걸어도 됨
// Load만 이렇게 따로 하기
let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad());

function queryLoad() {
  queryload.innerHTML = "Done On Load!";
}
