const inputEl = document.querySelector('#validation-input');
// console.dir(inputEl);

function onInputHandler(event) {
    const validCountOfSymbols = Number(inputEl.dataset.length);
    const inputValueLength = event.currentTarget.value.length;

    if (inputValueLength === validCountOfSymbols) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid'); 
    }
};

inputEl.addEventListener('blur', onInputHandler);