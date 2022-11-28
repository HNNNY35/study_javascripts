// form에 입력하지 않고 submit이 안되게 막기
// onsubmit : form의 타입이 submit => submit시 발생하는 이벤트
// return validatateForm()이 false면 action으로 연결되지 않음
function validateForm() {
  // form은 단축어로 사용 가능함(querySelector도 가능하나 id를 부여해야함)
  let fnamevalue = document.forms["myForm"]["fname"].value; // myForm의 fname input 부분의 값을 선택
  if (fnamevalue == "") {
    let queryErrorId = document.querySelector("#fnameErrorId");
    queryErrorId.innerHTML = "Name must be filled in";
    queryErrorId.style.color = "red";
    return false;
  }
  return true;
}

// 쿼리셀렉터로 search 선택하고
// search에 들어가는 값이 1~10만 되게

//
let btnsearch = document.querySelector("#btnsearch");
btnsearch.addEventListener("click", (event) => {
  searchForm(event);
});

function searchForm(event) {
  let searchInput = document.querySelector("#searchId");
  let searchValue = searchInput.value;
  let text;
  if (searchValue < 1 || searchValue > 10) {
    text = "input Not valid";
  } else {
    text = "Input OK!";
  }
  document.querySelector("#searchDescId").innerHTML = text;
}
