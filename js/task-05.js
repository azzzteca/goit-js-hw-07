
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

// inputEl.addEventListener('keyup', () => spanEl.textContent = inputEl.value);

inputEl.addEventListener('input', event => spanEl.textContent = event.currentTarget.value);
