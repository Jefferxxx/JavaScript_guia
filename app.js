var pato = "victor";
let gato = "chino";

// constantes
const grillo = "lopez";


// string

// Definición de cadenas de texto
// let saludo = "¡Hola, Jefferson!";
// let pregunta = '¿Cómo estás?';

// Concatenación de cadenas
// let mensaje = saludo + ' ' + pregunta; Unir dos cadenas con el operador '+'
// console.log(mensaje);   Salida: "¡Hola, Jefferson! ¿Cómo estás?"




// template string

// Definición de variables
// let nombre = "Jefferson";
// let edad = 30;

// Interpolación de variables
// let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// console.log(mensaje);  // "Hola, mi nombre es Jefferson y tengo 18 años."

// Cadenas multilínea
// let mensajeMultilinea = `Este es un ejemplo
// de una cadena de texto
// que ocupa varias líneas.`;
// console.log(mensajeMultilinea);




// numbers

// Números enteros
// let entero = 10;
// console.log(entero);  

// Números decimales
// let decimal = 3.14;
// console.log(decimal);  // 3.14

// Operaciones matemáticas
// let suma = 5 + 3;
// let producto = 4 * 2;
// let division = 10 / 2;
// console.log(suma);      // 8
// console.log(producto);  // 8
// console.log(division);  // 5


// boolean


// let esMayorDeEdad = true;
// let tienePermiso = false;

// if (esMayorDeEdad && tienePermiso) {
//     //console.log("Puedes entrar al evento.");
// } else {
//     console.log("No puedes entrar al evento.");
// }





// Que son las funciones y que tipos de funciones existente en JavaScript (de
//     ejemplos)
    

// Function declarativa
// function saludo(nombre = "Amigo") {
//     // Función de flecha
//     const mensaje = () => 'Hola, ${nombre}!';
//     // Function generadora
//     function* contador() {
//         yield "Iniciando saludo...";
//         yield mensaje();  // Llama a la función de flecha
//     }
    
//     // Función autoejecutable (IIFE)
//     (function() {
//         const gen = contador();
//         console.log(gen.next().value);  // "Iniciando saludo..."
//         console.log(gen.next().value);  // "Hola, Amigo!"
//     })();
// }

saludo();  // Llama a la función sin parámetros
saludo("Juan");  // Llama a la función con un nombre específico


let uno = 1;
let dos = new Number(2);
let tres = "3.5";
console.log(dos);
let flotante = 7.1542;
console.log(flotante.toFixed(1));
let nuevo = parseFloat(tres);

if (typeof tres === "number") {
    console.log(tres * nuevo);
}else{
    console.log("NO");
    
}
console.log(typeof entrada);

console.log(typeof tres === "number")

let respues = confirm("desean salir a comer?")
alert(respues)
