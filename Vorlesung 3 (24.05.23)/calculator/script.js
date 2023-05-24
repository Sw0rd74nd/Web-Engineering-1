let currentResult = document.getElementById('result');

function appendNumber(number) {
    // to be implemented
    currentResult.value += number;
}

function appendOperator(operator) {
    // to be implemented
    currentResult.value += operator;
}

function calculate() {
    // to be implemented
    currentResult.value = eval(currentResult.value);
}

function clearResult() {
    // to be implemented
    currentResult.value = '';
    
}
