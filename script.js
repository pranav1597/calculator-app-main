
// for calculation

class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    // to clear all the numbers on the screen
    reset(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    // to delete the number
    delete(){
        this.currentOperand = this.currentOperand.slice(0,-1);
    }

    // to display the number on screen by clicking on number
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;

        if(this.currentOperand){
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
        else{
            this.currentOperand = number;
        }
    }

    // to choose the arithmetic operators
    chooseOperation(operation){
        if(!this.currentOperand) return;
        if(this.previousOperand){
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    // to compute the previous and current value
    compute(){
        let computation;
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);

        if(!prev || !current) return;

        switch(this.operation){
            case '+':
                computation = prev + current;
                break;

            case '-':
                computation = prev - current;
                break;

            case 'x':
                computation = prev * current;
                break;

            case '/':
                computation = prev / current;
                break;
            
            default:
                return;
        }

       this.currentOperand = computation;
       this.operation = undefined;
       this.previousOperand = '';
    }

    // to seperate the numbers with commas
    getDisplayNumber(number){
            const stringNumber = number.toString();
            return stringNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

    // updating the numbers on output
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
        else{
            this.previousOperandTextElement.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const resetButton = document.querySelector('[data-reset]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', () =>{
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () =>{
    calculator.delete();
    calculator.updateDisplay();
})

resetButton.addEventListener('click', () =>{
    calculator.reset();
    calculator.updateDisplay();
})



// for toggle button

// const checkbox = document.getElementById('checkbox');


// checkbox.addEventListener('change', () => {
//     // change the theme of the calculator
//     document.body.classList.toggle('themetwo');
// })



// for theme selection


let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");
let radio3 = document.querySelector("#radio3");
let body = document.body;


// theme1

radio1.addEventListener("change", function () {
    if(radio1.checked){
        body.classList.remove("theme2", "theme3");
        body.classList.add("theme1");
    }
});

// THEME 2

radio2.addEventListener("change", function () {
    if(radio2.checked){
        body.classList.remove("theme1", "theme3");
        body.classList.add("theme2");
    }
});

// THEME 3

radio3.addEventListener("change", function () {
    if(radio3.checked){
        body.classList.remove("theme1", "theme2");
        body.classList.add("theme3");
    }
});
