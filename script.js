
//Uppgift 4 - Skapa variabler

const textfields = document.getElementsByClassName('textfield');
const checkbox = document.querySelector('.checkbox');
const output = document.getElementById('output');
const myButton = document.getElementById('myButton');



//Uppgift 5 - Skapa en fördefinierad funktion
// Fördefinierad funktion som eventlyssnare för textfälten
function handleTextFieldInput(e) {
    // Lagrar name-attributet i en variabel
    const inputName = e.target.name;
    console.log(e.target);

    if (inputName === 'content') {
        output.innerHTML = e.target.value; // Använder innerHTML för att uppdatera 'output'
    }
}


// Uppgift 6 - Koppla eventlyssnare
// Koppla eventlyssnare till varje textfält för 'input' eventet
for (let field of textfields) {
    field.addEventListener('input', handleTextFieldInput);
    field.addEventListener('blur', handleTextFieldInput);
}

// Uppdatera bakgrundsfärgen när kryssrutan ändras
checkbox.addEventListener('change', function() {
    // Hämta färginputfältet från samlingen textfields
    const colorInput = textfields[0];
    if (checkbox.checked) {
        output.style.backgroundColor = colorInput.value;
    } else {
        output.style.backgroundColor = ''; // Återställ bakgrundsfärgen om avmarkerad
    }
});

myButton.addEventListener('click', function() {
    output.remove();
    console.log('DIV:en "output" borttagen');
});
