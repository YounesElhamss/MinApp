let button = document.getElementById('increment');
let reset = document.getElementById('reset');
let numberCounter = document.getElementById('number');
//numberCounter.innerHTML = "Antal gange:0";
let i = 0;
let antal = "Antal:";

button.addEventListener('click', function() {
    i += 1;
    numberCounter.innerHTML = antal + ' ' + i;
})

reset.addEventListener('click', function() {
    i = 0;
    numberCounter.innerHTML = antal + ' ' + i;
})