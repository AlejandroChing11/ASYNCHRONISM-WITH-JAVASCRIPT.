function calculadoraComplete (num1, num2) {   //This function is used to calculate the calculadoraComplete between two numbers, and it will be used with a callback
    console.log("La suma de los numeros es", num1 + num2);
    console.log("La multiplicacion de los numeros es", num1 * num2);
    console.log("La division de los numeros es", num1 / num2);
}

calc(10, 5, calculadoraComplete); //we call "calc" with 3 parameters: num1, num2, multiplicacion. "multiplicacion" is the first funcion or the father function.

setTimeout(function () {
    console.log('Hello, world!');
}, 2000)


function Saludo (name) {
    console.log('Hello World!', name);
}

setTimeout(Saludo, 2000, "Alejandro");
