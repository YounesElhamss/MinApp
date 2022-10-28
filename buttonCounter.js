let button = document.getElementById('increment');
let reset = document.getElementById('reset');
let numberCounter = document.getElementById('number');
//numberCounter.innerHTML = "Antal gange:0";
let i = 0;

button.addEventListener('click', function() {
    i += 1;
    numberCounter.innerHTML = "Antal: " + i;
})

reset.addEventListener('click', function() {
    i = 0;
    numberCounter.innerHTML = "Antal: " + i;
})