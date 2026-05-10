let count = 0;
let countElement = document.getElementById("counter");

document.getElementById("decrease").addEventListener("click", function() {
count --;
countElement.textContent = count;
});

document.getElementById("reset").addEventListener("click", function() {
count = 0;
countElement.textContent = count;
});

document.getElementById("increase").addEventListener("click", function() {
count++;
countElement.textContent = count;

});