let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(num) {
    if ( currentInput === "0") 
    currentInput = "";
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
    let maxLength = 14;
    let displayValue = previousInput + " " + operator + " " + currentInput;
    document.getElementById("display").textContent = displayValue.trim().substring(0, maxLength); //表示する最大文字数を指定
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    display.innerText = "0";
}

function calculate() {
    if (previousInput === "" || currentInput === "" || operator === "") return;
    
    let result;
    let previousNum = parseFloat(previousInput);
    let currentNum = parseFloat(currentInput);

    switch (operator) {
        case "+": result = previousNum + currentNum; break;
        case "-": result = previousNum - currentNum; break;
        case "*": result = previousNum * currentNum; break;
        case "/": result = currentNum !== 0 ? previousNum / currentNum : "Error"; break;
        default: return;
    }
    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}