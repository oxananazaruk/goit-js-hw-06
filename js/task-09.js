function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const body = document.querySelector('body');



function onButtonChangeColorHandler() {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorValue.textContent = `${randomColor}`
}

buttonChangeColor.addEventListener('click', onButtonChangeColorHandler);