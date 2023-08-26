const fontSizeRange = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

function onFontSizeRangeHandler(event) {
    const valueFontSize = event.currentTarget.value;

    textToChange.style.fontSize = `${valueFontSize}px`;
};

fontSizeRange.addEventListener('input', onFontSizeRangeHandler);