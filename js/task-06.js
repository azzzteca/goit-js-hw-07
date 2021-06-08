const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener ("blur", () => {
    if (inputEl.value.length < inputEl.dataset.length && inputEl.value.length >= 1) {

        inputEl.classList.add('invalid');

        return;
    };

    if (inputEl.value.length >= inputEl.dataset.length) {
        inputEl.classList.add('valid');
    };

});