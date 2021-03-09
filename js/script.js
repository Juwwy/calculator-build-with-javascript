
 
 //lab task
 // create a new calulator project folder
 // try and extract some operation inside a function
 // One - call the getElement function where neccessary
 // Create the Sum, Minus, Division, Multiply, Modulo, as function and call them where neccessary.


 function getElement(elementId){
    return document.getElementById(elementId);
 }

const txtResult = getElement("txtResult");
const txtInput1 = getElement("txtInput1");
const txtInput2 = getElement("txtInput2");

const sumSign = getElement("sumSign");
const minusSign = getElement("minusSign");
const multiplySign = getElement("multiplySign");
const divideSign = getElement("divideSign");
const moduloSign = getElement("moduloSign");


sumSign.addEventListener("click", runThis);
minusSign.addEventListener("click", runThis);
multiplySign.addEventListener("click", runThis);
divideSign.addEventListener("click", runThis);
moduloSign.addEventListener("click", runThis);


function sum (num1, num2){
    return num1 + num2;
}

function minus (num1, num2){
    return  num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    if(num2 == 0){
        return "cannot divide a number by zero"
    }else{
        return num1 / num2;
    }
}

function modulo (num1, num2){
    if(num2 == 0){
        return "cannot modulo a number by zero"
    }else{
        return num1 % num2;
    }
}

function runThis(){
    let num1 = parseInt(txtInput1.value);
    let num2 = parseInt(txtInput2.value);

    let sign = event.target.value;
    if(sign == "+"){
        txtResult.value = sum(num1, num2);
       
    }
    
    else if (sign == "-"){
        txtResult.value = minus(num1, num2);
        
    }
    
    else if (sign == "*"){
        txtResult.value = multiply(num1, num2);
       
    }
    
    else if (sign == "/"){

        txtResult.value = divide(num1, num2);
    }
    
    else{
        txtResult.value = modulo(num1, num2);
        
    }
    

}   








// sumSign.addEventListener("click", runThis);

// function runThis(){
//     let num1 = parseInt(txtInput1.value);
//     let num2 = parseInt(txtInput2.value);
//     // let sign = event.target.value;
//     if(sumSign == "+"){
//         txtResult.value = txtInput1 + txtInput2;
//     }
// }



