const container = document.querySelector(".container");
const button = document.querySelector(".button");
const select = document.querySelector(".select");

let active = false;

const squareHover = (e) => {
  if (!e.target.classList.contains("blue") && active) {
    e.target.classList.toggle("hover2");
  }
};

const isActive = () => {
  event.preventDefault();
  !active ? (active = true) : (active = false);
  !active ? (button.innerText = "Resume") : (button.innerText = "Stop");
};

const onLoad = () => {
  fiveRow();
};

const changeRows = () => {
  if (select.value == 5) {
    container.innerHTML = "";
    fiveRow();
  }
  if (select.value == 10) {
    console.log(select.value);
    container.innerHTML = "";
    tenRow();
  }
};

const fiveRow = () => {
  container.innerHTML = "";
  let i = 0;
  while (i < 25) {
    container.innerHTML += `
<square class='square' id=${i + 1}>
</square>
`;
    i++;
  }
};

const tenRow = () => {
  container.innerHTML = "";
  let i = 0;
  while (i < 100) {
    container.innerHTML += `
<square class='lilsquare' id=${i + 1}>
</square>
`;
    i++;
  }
};

select.addEventListener("click", changeRows);
select.addEventListener("mouseout", changeRows);
container.addEventListener("mouseover", squareHover);
button.addEventListener("click", isActive);
window.addEventListener("load", onLoad);
