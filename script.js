// script.js

const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
});
