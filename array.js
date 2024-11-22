// const a = [1,"letras", true, false,[1,"jefferson"]];
// a.push("gio")
// a.pop();

// console.log(a[4][1]);

const persona = {
    nombre: "jefferson",
    apellido: "cadavid",
    edad: 18,
    saludar: function () {
        return ` hola soy ${this.nombre}`;
    }
}
// 1 
persona.pais = "colombia";

persona.despedir = function () {
    return `chao se despide ${this.nombre}`
}

console.log(object.keys(persona));
    if (object.keys(persona).indexof("genero") === -1);{
        console.log("el atributo no fur definido");
    }

    console.log(object.keys(persona).includes ("nombre")); 



// console.log(persona.saludar());