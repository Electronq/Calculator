// basic calculator functions

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b;
}

// Hooks

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');

const display = document.getElementById('display')




// Operator function

let op = '';
let result = '';
let array =[];

function operate(op,num1,num2){
    if(op == '+'){
        result = add(num1,num2)
    } else if(op == '-'){
        result = substract(num1,num2)
    } else if(op == '*'){
        result = multiply(num1,num2)
    } else if(op == '/'){
        result = divide(num1,num2)
    }

    return result;

}


// function to update the display

function updateDisplay(){
    let temp = Object.values(memory)
    let memoryInString = temp.join('')
    display.textContent = `${memoryInString}`
}



// function to clear the display
function clearDisplay(){
    array = [];
    memory = {};
    op = '';
    countProperties = 0;
    display.textContent = `0`
}


let memory = {}
let countProperties = 0;
// function to add to the memory

function addTempMemo(){
    let arrayInNumber = arrayCombiner(array);
    memory[countProperties] = arrayInNumber
}

function addMemory(){
    memory[countProperties + 1] = op;
    countProperties+=2
    array = [];
}



// function to check if array 1 is empty 
function isOpEmpty(){
    if(op == ''){
        return true
    } else return false;
}



// function to calculate and show result

function calculate(){
    let memoryLength = Object.keys(memory).length;
    if(!(memoryLength % 2 == 0)){
       let x = 0;
       temp = operate(memory['1'],memory['0'],memory['2']);
       while(memoryLength > x){
           temp2 = operate(memory[x+3],temp,memory[x+4]);
           temp = temp2;
           console.log(temp2)
           x+=2
       }
       display.textContent = `${temp}`
    
    }
    


    
}

// Event Listener

num1.addEventListener('click', () => {
    array.push(1)
    addTempMemo();
    updateDisplay();
})

num2.addEventListener('click', () => {
    array.push(2)
    addTempMemo();
    updateDisplay();
})

num3.addEventListener('click', () => {
    array.push(3)
    addTempMemo();
    updateDisplay();
})

num4.addEventListener('click', () => {
    array.push(4)
    addTempMemo();
    updateDisplay();
})

num5.addEventListener('click', () => {
    array.push(5)
    addTempMemo();
    updateDisplay();
})

num6.addEventListener('click', () => {
    array.push(6)
    addTempMemo();
    updateDisplay();
})

num7.addEventListener('click', () => {
    array.push(7)
    addTempMemo(); 
    updateDisplay();
})

num8.addEventListener('click', () => {
    array.push(8)
    addTempMemo(); 
    updateDisplay();
})

num9.addEventListener('click', () => {
    array.push(9)
    addTempMemo(); 
    updateDisplay();
})

num0.addEventListener('click', () => {
    array.push(0)
    addTempMemo(); 
    updateDisplay();
})

plusButton.addEventListener('click', () => {
    op = '+';
    addMemory();
    updateDisplay();
})

minusButton.addEventListener('click', () => {
    op = '-'
    addMemory();
    updateDisplay();
})

multiplyButton.addEventListener('click', () => {
    op = '*'
    addMemory();
    updateDisplay();
})

divideButton.addEventListener('click', () => {
    op = '/'
    addMemory();
    updateDisplay();
})

deleteButton.addEventListener('click', () => {
    updateDisplay();
    clearDisplay();

})

equalButton.addEventListener('click', () => {
    calculate();
})

// function to turn array to a number

function arrayCombiner(x){
    temp = x.join('')
    return Number(temp);
    
}


