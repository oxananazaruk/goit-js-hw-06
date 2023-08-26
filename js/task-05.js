const inputEl = document.querySelector('#name-input');
const nameForMesage = document.querySelector('#name-output');

function inputHandler(event) {
    const inputValue = event.currentTarget.value;
    
    nameForMesage.textContent = inputValue === "" ? 'Anonymous' : inputValue;
};

inputEl.addEventListener('input', inputHandler);