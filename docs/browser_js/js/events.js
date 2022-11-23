// Property 방식
function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change on Me!";
}
// element에 eventListener로 펑션을 넣어주기
let queryClickalert = document.querySelector("#clickalert");
// element.addEventListener(event(String형식. 이미 정의되어있음), function, useCapture : 거의 사용하지 않음)
queryClickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("click on Me");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

// parameter를 넘겨주지 않아도 event가 넘어가긴 하지만 기술하는게 좋음
function targetText(event) {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
