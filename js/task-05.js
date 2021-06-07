
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('keyup', () => spanEl.textContent = inputEl.value);

