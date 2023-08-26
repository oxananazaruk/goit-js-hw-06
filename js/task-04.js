let counterValue = 0;

function decremt() {
    counterValue -= 1; 
    value.textContent = counterValue;
};

function increment() {
    counterValue += 1;
    value.textContent = counterValue;
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', decremt);
incrementBtn.addEventListener('click', increment);


