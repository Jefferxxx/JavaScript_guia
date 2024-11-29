// const amigos = (a, b) => {
//     const sumaDivisores = (n) => {
//         let suma = 0;
//         for (let i = 1; i < n; i++) {
//             if (n % i === 0) {
//                 suma += i;
//             }
//         }
//         return suma;
//     }

//     return sumaDivisores(a) === b && sumaDivisores(b) === a;
// };

// let a = 220;
// let b = 284;

// let sonAmigos = amigos(a, b);
// console.log(sonAmigos);



// modificacion

const esPerfecto = (n) => {
    const sumaDivisores = (n) => {
        let suma = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                suma += i;
            }
        }
        return suma;
    }

    return sumaDivisores(n) === n;
};

let numero = 28;  // 6, 28, 496, etc.
let esNumeroPerfecto = esPerfecto(numero);
console.log(esNumeroPerfecto); 
