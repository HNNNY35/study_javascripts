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
