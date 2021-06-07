const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener ("blur", () => {
        if (inputEl.value.length < inputEl.dataset.length && inputEl.value.length >= 1) {

        inputEl.setAttribute("class", '.invalid') // не получается добавить стили

        // break;
    }

    if (inputEl.value.length >= inputEl.dataset.length) {
        inputEl.id = 'validation-input.valid'; // не добавляются стили
    }

});