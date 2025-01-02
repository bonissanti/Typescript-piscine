var form = document.getElementById('submit');
var log = document.getElementById('id');
function handleEvent(event) {
    var input = document.getElementById('userInput').value;
    if (input === "") {
        log.textContent = 'RIP, you dumb!';
    }
    else
        log.textContent = "You typed: ".concat(input.toUpperCase());
    event.preventDefault();
}
form.addEventListener('submit', handleEvent);
console.log("End");
