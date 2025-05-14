const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Stupid boy" 
    }
}

function backspace(){
    display.value =display.value.slice(0, -1);
}
