let trailingResult = 0;
let operationals = ["add", "multiply", "divide", "subtract","%"];
let workingOperational = ""

function updateDisplay(input) {
    let display = document.getElementById("display")



    if (display.innerHTML === '0' && operationals.indexOf(input) === -1) {
        if (input === 'decimal') {
            display.innerHTML = '0.' 
        }else {
            display.innerHTML = input; 
        }   
    } else if (operationals.indexOf(input) >= 0) {
        console.log("Dealing with a operation")

        if (workingOperational === "") {
            workingOperational = input
            trailingResult = display.innerHTML
            display.innerHTML = 0;

        }
        else {
            trailingResult = calculate(trailingResult, display.innerHTML, workingOperational)
            secondDisplay = trailingResult
            display.innerHTML = 0
            workingOperational = input

        }
    } else if (input === "equals") {


        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperational)
        trailingResult = display.innerHTML
        workingOperational = ""

    }
    else if (input === "decimal") {

        if (display.innerHTML.indexOf(".") === -1) { 
            display.innerHTML += "." ;}
            else
            console.log("skipped the point")

    }
    else {
        display.innerHTML += input

    }

}

function last(){
    document.getElementById("display").innerHTML = trailingResult
}

function clearOne(){
    document.getElementById("display").innerHTML= document.getElementById("display").innerHTML.slice(0, -1);
}
function clearDisplay() {

    trailingResult = 0
    document.getElementById("display").innerHTML = "0"

}

function calculate(first, second, operational) {
    let result;
    first = parseFloat(first)
    second = parseFloat(second)

    switch (operational) {
        case 'add':
            result = first + second;
            break;
        case 'subtract':
            result = first - second;
            break;
        case 'divide':
            result = (first) / second;
            break;
        case 'multiply':
            result = first * second;
            break;
        case '%':
            result =  (first*second)/100;
            break;

        default:
            console.log("ERROR");


    }

    return result.toString()

}


