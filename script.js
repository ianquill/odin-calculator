// basic operators

function add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
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
            if (b == 0) {
                return "ERROR"
            } else {
                return roundResult(divide(a, b));
            }
            
    }
}

function roundResult(result) {
    // check length of result, if more than 15, take the difference and round to that many digits
    if (result.length > 15) {
        let resultDifference = result.length - 15;
        let roundedResult = result.toPrecision(resultDifference);
        console.log(roundedResult);
        return roundedResult;
    }

}

// displays

const mainDisplay = document.querySelector(".main-display");
const subDisplay = document.querySelector(".sub-display");
const operatorDisplay = document.querySelector(".operator-display");

let mainDisplayContent;
let subDisplayContent;
let operatorDisplayContent;
let result = false;


function refreshDisplay() {
    console.log(mainDisplayContent.length);

    // if (mainDisplayContent.length < 15) {
    //     mainDisplay.textContent = mainDisplayContent;
    //     subDisplay.textContent = subDisplayContent;
    //     operatorDisplay.textContent = operatorDisplayContent;
    // } else if (mainDisplayContent.length >= 15) {
    //     mainDisplayContent = "ERROR: OVERFLOW";
    //     mainDisplay.textContent = mainDisplayContent;
    // }

    mainDisplay.textContent = mainDisplayContent;
    subDisplay.textContent = subDisplayContent;
    operatorDisplay.textContent = operatorDisplayContent;

}

function checkMainDisplay() {
    if (mainDisplayContent === "") {
        return false;
    } else {
        return true;
    }
}

function fillSubDisplay() {
    subDisplayContent = mainDisplayContent;
    mainDisplayContent = "";
}

function checkDisplaysFull() {
    if (mainDisplayContent !== "" & subDisplayContent !== "" & operatorDisplayContent !== "") {
        return true;
    } else {
        return false;
    }
}

// buttons

function pressButton(button) {
    
    switch (button) {
        case "clear":
            subDisplayContent = "";
            mainDisplayContent = "";
            operatorDisplayContent = "";
            result = false;
            refreshDisplay(); 
            break;

        case "backspace":
            // maybe convert to array, remove last digit?
            // convert back
            refreshDisplay(); 
            break;

        case "divide":
            result = false;
            if (checkDisplaysFull()) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                operatorDisplayContent = "/";
                mainDisplayContent = "";
                refreshDisplay();
            } else if (checkMainDisplay()) {
                operatorDisplayContent = "/";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "multiply":
            result = false;
            if (checkDisplaysFull()) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                operatorDisplayContent = "*";
                mainDisplayContent = "";
                refreshDisplay();
            } else if (checkMainDisplay()) {
                operatorDisplayContent = "*";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "subtract":
            result = false;
            if (checkDisplaysFull()) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                mainDisplayContent = "";
                operatorDisplayContent = "-";
                refreshDisplay();
            } else if (checkMainDisplay()) {
                operatorDisplayContent = "-";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "add":
            result = false;
            if (checkDisplaysFull()) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                operatorDisplayContent = "+";
                mainDisplayContent = "";
                refreshDisplay();
            } else if (checkMainDisplay()) {
                operatorDisplayContent = "+";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "decimal":
            if (!mainDisplayContent.includes('.')){
                mainDisplayContent += ".";
                refreshDisplay(); 
            }
            break;

        case "equals":
            if (mainDisplayContent !== "" & subDisplayContent !== "" & operatorDisplayContent !== "") {
                console.log("equals");
                mainDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                subDisplayContent = "";
                operatorDisplayContent = "";
                result = true;
                refreshDisplay(); 
            }

            break;

        case "zero":
            if (!result) {
                mainDisplayContent += 0;
                refreshDisplay(); 
            }
            break;

        case "one":
            if (!result) {
                mainDisplayContent += 1;
                refreshDisplay(); 
            }
            break;
            
        case "two":
            if (!result) {
                mainDisplayContent += 2;
                refreshDisplay(); 
            }
            break;

        case "three":
            if (!result) {
                mainDisplayContent += 3;
                refreshDisplay(); 
            }
            break;

        case "four":
            if (!result) {
                mainDisplayContent += 4;
                refreshDisplay(); 
            }
            break;

        case "five":
            if (!result) {
                mainDisplayContent += 5;
                refreshDisplay(); 
            }
            break;

        case "six":
            if (!result) {
                mainDisplayContent += 6;
                refreshDisplay(); 
            }
            break;

        case "seven":
            if (!result) {
                mainDisplayContent += 7;
                refreshDisplay(); 
            }
            break;

        case "eight":
            if (!result) {
                mainDisplayContent += 8;
                refreshDisplay(); 
            }
            break;

        case "nine":
            if (!result) {
                mainDisplayContent += 9;
                refreshDisplay(); 
            }
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
