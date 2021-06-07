const counterValueEl =  document.querySelector('#value');
let counterValue = Number(counterValueEl.textContent);

const decrementFn = () => counterValueEl.textContent = counterValue -= 1;
const incrementFn = () => counterValueEl.textContent = counterValue += 1;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]')

decrementEl.addEventListener ('click', decrementFn);
incrementEl.addEventListener ('click', incrementFn)