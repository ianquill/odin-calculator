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
    console.log("result is " + result);
    if (result.toString().length > 15) {
        console.log("rounded");
        let resultDifference = result.toString().length - 1;
        let roundedResult = result.toPrecision((result.toString().length - resultDifference));
        console.log(roundedResult);
        return roundedResult;
    } else {
        return result;
    }

}

// displays

const mainDisplay = document.querySelector(".main-display");
const subDisplay = document.querySelector(".sub-display");
const operatorDisplay = document.querySelector(".operator-display");

let mainDisplayContent = "";
let subDisplayContent = "";
let operatorDisplayContent = "";
let result = false;
let suspend = false;


function refreshDisplay() {
    console.log(mainDisplayContent.length);

    if (mainDisplayContent.toString().length < 15) {
        suspend = false;
        mainDisplay.textContent = mainDisplayContent;
        subDisplay.textContent = subDisplayContent;
        operatorDisplay.textContent = operatorDisplayContent;
    } else if (mainDisplayContent.toString().length >= 15) {
        suspend = true;
        subDisplay.textContent = "";
        operatorDisplay.textContent = "";
        mainDisplay.textContent = "ERROR: OVERFLOW";
    }

}

refreshDisplay();

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
            suspend = false;
            refreshDisplay(); 
            break;

        case "backspace":
            let charArray = Array.from(mainDisplayContent.toString().split(""));
            charArray.pop();
            mainDisplayContent = charArray.join("");
            refreshDisplay(); 
            break; 

        case "divide":
            result = false;
            if (checkDisplaysFull() && !suspend) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                operatorDisplayContent = "/";
                mainDisplayContent = "";
                refreshDisplay();
            } else if (checkMainDisplay() && !suspend) {
                operatorDisplayContent = "/";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "multiply":
            result = false;
            if (checkDisplaysFull() && !suspend) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                operatorDisplayContent = "*";
                mainDisplayContent = "";
                refreshDisplay();
            } else if (checkMainDisplay() && !suspend) {
                operatorDisplayContent = "*";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "subtract":
            result = false;
            if (checkDisplaysFull() && !suspend) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                mainDisplayContent = "";
                operatorDisplayContent = "-";
                refreshDisplay();
            } else if (checkMainDisplay() && !suspend) {
                operatorDisplayContent = "-";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "add":
            result = false;
            if (checkDisplaysFull() && !suspend) {
                subDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                operatorDisplayContent = "+";
                mainDisplayContent = "";
                refreshDisplay();
            } else if (checkMainDisplay() && !suspend) {
                operatorDisplayContent = "+";
                fillSubDisplay();
                refreshDisplay(); 
            }
            break;

        case "decimal":
            if (!mainDisplayContent.includes('.') && !suspend){
                mainDisplayContent += ".";
                refreshDisplay(); 
            }
            break;

        case "equals":
            if (mainDisplayContent !== "" & subDisplayContent !== "" & operatorDisplayContent !== "" && !suspend) {
                console.log("equals");
                mainDisplayContent = operate(subDisplayContent, mainDisplayContent, operatorDisplayContent);
                subDisplayContent = "";
                operatorDisplayContent = "";
                result = true;
                refreshDisplay(); 
            }

            break;

        case "zero":
            if (!result && !suspend) {
                mainDisplayContent += 0;
                refreshDisplay(); 
            }
            break;

        case "one":
            if (!result && !suspend) {
                mainDisplayContent += 1;
                refreshDisplay(); 
            }
            break;
            
        case "two":
            if (!result && !suspend) {
                mainDisplayContent += 2;
                refreshDisplay(); 
            }
            break;

        case "three":
            if (!result && !suspend) {
                mainDisplayContent += 3;
                refreshDisplay(); 
            }
            break;

        case "four":
            if (!result && !suspend) {
                mainDisplayContent += 4;
                refreshDisplay(); 
            }
            break;

        case "five":
            if (!result && !suspend) {
                mainDisplayContent += 5;
                refreshDisplay(); 
            }
            break;

        case "six":
            if (!result && !suspend) {
                mainDisplayContent += 6;
                refreshDisplay(); 
            }
            break;

        case "seven":
            if (!result && !suspend) {
                mainDisplayContent += 7;
                refreshDisplay(); 
            }
            break;

        case "eight":
            if (!result && !suspend) {
                mainDisplayContent += 8;
                refreshDisplay(); 
            }
            break;

        case "nine":
            if (!result && !suspend) {
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

window.addEventListener('keydown', function(e) {
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`)
    pressButton(button.id);
})