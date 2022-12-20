let trailingResult = 0;
let operationals = ["equals", "add", " multiply", "divide", "subtract"];
let workingOperational = ""

function updateDisplay(input) {

    let display = document.getElementById("display")
    let secondDisplay = document.getElementById("secondDisplay")


    if (display.innerHTML === '0' && operationals.indexOf(input) === -1) {
        display.innerHTML = input;
    } else if (operationals.indexOf(input) >= 0) {

        if (workingOperational === "") {
            workingOperational = input
            trailingResult = display.innerHTML
            display.innerHTML = 0;
            secondDisplay.innerHTML = trailingResult
        }
        else {
            display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperational)
            trailingResult = display.innerHTML ;
            workingOperational = ""
            
        }
    } else if (input === "equals") {


        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperational)
        trailingResult = display.innerHTML
        workingOperational=""
    } else {
        display.innerHTML += input

    }

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
            result = first / second;
            break;
        case 'multiply':
            result = first * second;
            break;

        default:
            console.log("ERROR");


    }
    console.log(result.toString())
    return result.toString()

}

function clearDisplay() {
    
    trailingResult=0
    document.getElementById("display").innerHTML = "0"
    document.getElementById("secondDisplay").innerHTML = trailingResult
    
}

