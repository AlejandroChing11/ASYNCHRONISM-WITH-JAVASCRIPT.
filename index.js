function calculadoraComplete (num1, num2) {   //This function is used to calculate the calculadoraComplete between two numbers, and it will be used with a callback
    console.log("La suma de los numeros es", num1 + num2);
    console.log("La multiplicacion de los numeros es", num1 * num2);
    console.log("La division de los numeros es", num1 / num2);
}

function calc(num1, num2, callback) {   //"Calc" is the funciton where we are going to use a callback, there it has 3 parameters: num1, num2, callback. "callback" is the function multiplicaion.
    return callback(num1, num2);
}

calc(10, 5, calculadoraComplete); //we call "calc" with 3 parameters: num1, num2, multiplicacion. "multiplicacion" is the first funcion or the father function.