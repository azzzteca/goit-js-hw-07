const inputEl = document.querySelector("#validation-input");
const dataSetLength = Number(inputEl.dataset.length);

inputEl.addEventListener ("blur", () => {

    if (inputEl.value.length === dataSetLength) {

        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    } else {

        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    };
});