let currentInput = "";
let previousInput = "";
let operator = null;

const display = document.getElementById("display");

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function chooseOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = "";
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    display.innerText = "0";
}