let currentOperator;
let numA;
let numB;

// basic operators

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

// calculator logic

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

// display

const display = document.querySelector(".display");

let displayContent;

function refreshDisplay() {
    // add currentOperator display to this

    display.textContent = displayContent;
    return;
}

// buttons

function pressButton(button) {
    
    switch (button) {
        case "clear":
            displayContent = "";
            refreshDisplay(); 
            break;

        case "backspace":
            // maybe convert to array, remove last digit?
            // convert back
            refreshDisplay(); 
            break;

        case "divide":
            currentOperator = "/";
            refreshDisplay(); 
            break;

        case "multiply":
            currentOperator = "*";
            refreshDisplay(); 
            break;

        case "subtract":
            currentOperator = "-";
            refreshDisplay(); 
            break;

        case "add":
            currentOperator = "+";
            refreshDisplay(); 
            break;

        case "decimal":
            displayContent = "";
            refreshDisplay(); 
            break;

        case "equals":
            displayContent = operate(a, b, currentOperator);
            refreshDisplay(); 
            break;

        case "zero":
            displayContent += 0;
            refreshDisplay(); 
            break;

        case "one":
            displayContent += 1;
            refreshDisplay(); 
            break;
            
        case "two":
            displayContent += 2;
            refreshDisplay(); 
            break;

        case "three":
            displayContent += 3;
            refreshDisplay(); 
            break;

        case "four":
            displayContent += 4;
            refreshDisplay(); 
            break;

        case "five":
            displayContent += 5;
            refreshDisplay(); 
            break;

        case "six":
            displayContent += 6;
            refreshDisplay(); 
            break;

        case "seven":
            displayContent += 7;
            refreshDisplay(); 
            break;

        case "eight":
            displayContent += 8;
            refreshDisplay(); 
            break;

        case "nine":
            displayContent += 9;
            refreshDisplay(); 
            break;

        default:
            break;
    }

}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        pressButton(button.id);
    })
})
