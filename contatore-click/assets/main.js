const button = document.querySelector('button')

console.log(button);
let counter = 1;

button.addEventListener('click', contatore)

function contatore() {
    button.textContent = 'Click: ' + counter++;
}