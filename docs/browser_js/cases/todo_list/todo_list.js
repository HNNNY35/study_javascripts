// item 추가 : 글자 입력 후 Add or Enter + 입력 없을 시 alter window "Please enter a task"
let queryList = document.querySelector("#list");
let queryInput = document.querySelector("#input_text");

let queryAddBtn = document.querySelector("#addBtn");
queryAddBtn.addEventListener("click", (event) => {
  addList(event);
});

queryInput.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    addList(event);
  }
});

function addList(event) {
  if (queryInput.value != "") {
    let newTodoList = `<li>
    <div class="todoList">
      <div class="todoContent">${queryInput.value}</div>
      <div class="button">
      <div class="favorite">
        <i class="material-icons">favorite_border</i>
      </div>
      <div class="delete">
        <i class="material-icons">delete</i>
      </div>
    </div>
  </div>
</li>`;

    queryList.insertAdjacentHTML("beforeend", newTodoList);
    queryInput.value = "";
  } else {
    alert("Please enter a task");
  }
}

// item 좋아요 : 토글링 효과 적용(좋아요/원래대로)

queryList.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite")
    event.target.innerHTML = "favorite_border";
});

// item 삭제 : 선택 item 완전 삭제
queryList.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
});

// item hover : pointer 표시 => css
