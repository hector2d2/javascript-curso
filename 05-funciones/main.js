/**
 * Funciones
 */

nombre = 'hector';


// const saluda = function saludar(nombre){
//     alert(`Hola, ${nombre}`);
// }

// var saluda = 15;

// console.log(saluda);

// Funcion que sume dos numeros

const resultado = function sumaDosNumeros(num1,num2){
    return num1+num2;
} 

console.log(resultado(5,10));

// Let y Var

var numero;
numero = '90';
numero = false;
numero = 10;

if(numero == 10){
    var numero = 15;
}

// alert(numero)

let numero2;
numero2 = '90';
numero2 = false;
numero2 = 10;

if(numero2 == 10){
    //===============================
    let numero2 = 15;
    // alert(`nivel de scope 2: ${numero2}`);
    //===============================
}

// alert(`nivel de scope 1: ${numero2}`);
// var numero2;
// numero2 = true;
// alert(numero2)