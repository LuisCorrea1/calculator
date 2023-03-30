class Calculator {
    constructor(input,output) {
        this.input = input;
        this.output = output;
    }

    clear(){

    }

    delete(){

    }

    appendNumber(number){

    }

    selectOperation(operation){

    }

    makeOperation(){

    }

    updateDisplay(){
        
    }
}

const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const input = document.querySelector('[data-operand1]');
const output = document.querySelector('[data-operand2]');

