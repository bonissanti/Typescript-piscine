const form = document.getElementById('submit') as HTMLElement;
const log = document.getElementById('id') as HTMLElement;

function handleEvent(event: Event){
    const input = (document.getElementById('userInput') as HTMLInputElement).value;
    if (input === ""){
        log.textContent = 'RIP, you dumb!';
    }
    else
        log.textContent = `You typed: ${input.toUpperCase()}`;
    event.preventDefault();
}

form.addEventListener('submit', handleEvent);
console.log("End");