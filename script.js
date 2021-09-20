function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {

    switch (operator) {
        case "+":
            return add(a, b);
            
        case "-":
            return subtract(a, b);
        
        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);
            
    }
}

console.log(add(22, 21));

console.log(subtract(214, 124));

console.log(multiply(2, 4));

console.log(divide(4, 2));

console.log(operate(2, 4, "+"));

console.log(operate(4, 8, "*"));

console.log(operate(2, 5, "/"));