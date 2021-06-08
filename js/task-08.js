const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-action="render"]');
const buttonDeleteEl = document.querySelector('button[data-action="destroy"]')
const boxesEl = document.querySelector('#boxes');

    buttonCreateEl.addEventListener('click', createBoxes);
    buttonDeleteEl.addEventListener('click', deleteBoxes);

function createBoxes () {

    const divArrayEl = [];

    for (let i = 1; i <= inputEl.value; i += 1) {

        const newDivEl = document.createElement('div');
        
        newDivEl.style.width = `${(30 + 10*(i-1))}px`;
        newDivEl.style.height = `${(30 + 10*(i-1))}px`;

        const color1 = Math.floor(Math.random()*(255-1)+1);
        const color2 = Math.floor(Math.random()*(255-1)+1);
        const color3 = Math.floor(Math.random()*(255-1)+1);

        newDivEl.style.backgroundColor = `rgb(${Math.floor(Math.random()*(255-1)+1)}, ${Math.floor(Math.random()*(255-1)+1)}, ${Math.floor(Math.random()*(255-1)+1)})`;

        divArrayEl.push(newDivEl);
    };

    inputEl.value = '';

    boxesEl.append(...divArrayEl);
};


function deleteBoxes () {

    for (let i = 1; i <= inputEl.value; i += 1) {

        if (boxesEl.hasChildNodes) {
            boxesEl.removeChild(boxesEl.lastElementChild);
        };
};
    inputEl.value = '';
};