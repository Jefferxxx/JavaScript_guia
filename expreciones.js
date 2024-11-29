let palabra = "124Lorem ipsum dolor sit amet , adipisicing elit. Cum, recusandae? Ratione officia deserunt 12456 laboriosam explicabo impedit 9 molestiae veritatis distinctio, ullam sapiente voluptas quam tempora itaque consequatur saepe ipsam eligendi quasi!";

palabra = "123   vaca";
console.log

let regex = /^([0-9]{2,6}).+([a-z]{4,6})$/g;
// let regex = /[0-9]/i;

// function buscar(regex, palabra){
//     if (palabra.includes(regex)){
//         respuesta = true
//     }else{
//         respuesta = false
//     }
//     return respuesta
// }


console.log(regex.test(palabra));
// console.log(regex.exec(palabra));
console.log(palabra.match(regex));


