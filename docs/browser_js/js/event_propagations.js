// input으로 잡아서 for문으로 이벤트 주는 방법
// let queryInputAll = document.querySelectorAll("input");
// for (queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
// event.target을 사용하면 현재 이벤트가 적용된 엘리먼트를 알 수 있음 => 쿼리셀렉터와 같음
// event.target의 타입 : object

// 이벤트로 리스트 추가하기
let newItem = `<li>
<div>
  <input type="checkbox" name="" id="item3" />
  <label for="item3">item three</label>
  <span>
  <i class="material-icons delete">delete</i>
</span>
</div>
</li>`;

// let queryItemList = document.querySelector(".itemList");
// queryItemList.innerHTML = queryItemList.innerHTML + newItem;
// // 위처럼 하면 전체가 하나의 string으로 새 엘리먼트가 됨.
// // 인스턴스로 했던 이벤트가 동작하지 않음
// // 넣어줄 때마다 아래에 for문 돌려줘야 함
// let queryInputs = document.querySelectorAll("input");
// for (queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
// 위처럼 하면 위에 걸었던 이벤트는 사라지기 때문에 아래처럼 이용

// 상위 element에 Event 설정
// insertAdjacentHTML 사용. 댓글 달때 등
// let queryItemList = document.querySelector(".itemList");
// queryItemList.insertAdjacentHTML("beforeend", newItem);

// let queryInputs = document.querySelectorAll("input");
// for (queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

// li 하나하나에 주지 말고 최상단에 있는 ul한테 이벤트를 주기
// 버블방식
let queryItemList = document.querySelector(".itemList");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "undefined" && event.target.id != "") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    // event.target.remove(); // 이렇게 하면 휴지통 모양만 삭제됨
    event.target.parentElement.parentElement.parentElement.remove();
    // li 자체를 지우기 위해 상위로 세번 감
  }
});
queryItemList.insertAdjacentHTML("beforeend", newItem);

// let queryInputs = document.querySelectorAll("input");
// for (queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
