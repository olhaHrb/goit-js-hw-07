function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divParent = document.querySelector("#boxes");

let width = 30;
let height = 30;



createBtn.addEventListener("click", handleCreate);

function handleCreate(event) {
  if (input.value < 1 || input.value > 100) {
    return;
  } 

  createBoxes(input.value);
}

function createBoxes() {
  divParent.innerHTML = '';
  const boxes = [];

  
  for (let i = 0; i < input.value; i += 1)  {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    boxes.push(box);
  }

  input.value = "";
  width = 30;
  height = 30;
  divParent.append(...boxes);
}



destroyBtn.addEventListener("click", handleDestroy);
function handleDestroy(event) {
  divParent.innerHTML = '';
  input.value = "";
  width = 30;
  height = 30;
}






