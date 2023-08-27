function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


function onCreateBtnHandler(event) {
  const countOfBoxes = Number(inputNumber.value);
  const arrayMarkup = [];
  let step = 20;

  for (let i = 1; i <= countOfBoxes; i += 1) {
    const boxColor = getRandomHexColor();
    step += 10;
    arrayMarkup.push(`<div style="background-color: ${boxColor}; width: ${step}px; height: ${step}px;"></div>`);
  };
  
  const markup = arrayMarkup.join("");

  boxes.insertAdjacentHTML('beforeend', markup);
};


function onDestroyBtnHandler(event) {
  boxes.innerHTML = "";
};

createBtn.addEventListener('click', onCreateBtnHandler);
destroyBtn.addEventListener('click', onDestroyBtnHandler);