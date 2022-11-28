let queryRemoveBtn = document.querySelector("#btnRemove");
queryRemoveBtn.addEventListener("click", (event) => {
  clickRemove(event);
});

function clickRemove(event) {
  let queryRemove = document.querySelector("#remove");
  queryRemove.style.display = "none";
}

let queryHideBtn = document.querySelector("#btnHide");
queryHideBtn.addEventListener("click", (event) => {
  clickHide(event);
});

function clickHide(event) {
  let queryHide = document.querySelector("#hide");
  queryHide.style.visibility = "hidden";
}

let queryResetBtn = document.querySelector("#btnReset");
queryResetBtn.addEventListener("click", (event) => {
  clickReset(event);
});

function clickReset(event) {
  let queryRemove = document.querySelector("#remove");
  queryRemove.style.display = "block";

  let queryHide = document.querySelector("#hide");
  queryHide.style.visibility = "visible";
}
