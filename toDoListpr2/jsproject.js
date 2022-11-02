let body = document.querySelector("body");
let div = document.querySelector(".toDolist");
let ul = document.querySelector("ul");
let array = [];
let flag = true;

function show() {
  array.forEach((item) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let btn = document.createElement("button");
    btn.classList.add("butn");
    btn.style.width = "35px";
    btn.style.height = "35px";
    ul.append(li);
    li.append(span);
    li.append(btn);
    span.innerText = item;
  });
  document.querySelector(".sort").addEventListener("click", sort);

  const button = document.querySelectorAll(".butn");
  button.forEach((item) => {
    item.addEventListener("click", function (ev) {
      ev.target.parentElement.remove();
      let i = ev.target.previousElementSibling.innerText;
      console.log(ev.target.previousElementSibling);
      console.log(i);
      array = array.filter((item) => {
        return item != i ? item : null;
      });
      console.log(array);
    });
  });
}

function add() {
  let input = document.querySelector(".input");
  let spans = document.createElement("span");
  ul.innerHTML = " ";
  spans.innerHtml += `${input.value}`;
  if (input.value != " " && input.value == +input.value) {
    array.push(`${+input.value}`);
  } else if (input.value != " " && input.value != +input.value) {
    array.push(`${input.value}`);
  }
  console.log(array);

  show();
}

function sort() {
  ul.innerHTML = "";

  if (flag === true) {
    array.sort((a, b) => {
      flag = false;
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  } else {
    array.sort((a, b) => {
      flag = true;

      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
  }

  console.log(array);
  show();
}

function click() {
  document.querySelector(".add").addEventListener("click", add);
}
click();
