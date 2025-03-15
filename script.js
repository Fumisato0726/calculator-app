let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === "") return; // 数字なしで演算子を押したら無視
    if (operator !== "") return; // すでに演算子がある場合は無視

    operator = op;
    previousInput = currentInput;
    currentInput = "";

    updateDisplay();
}

function updateDisplay() {
    let displayValue = previousInput + " " + operator + " " + currentInput;
    document.getElementById("display").textContent = displayValue.trim();
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay();
}

function calculate() {
    if (previousInput === "" || currentInput === "" || operator === "") return;
    
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
        default: return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}