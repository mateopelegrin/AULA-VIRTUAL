function promediar() {
    let nota1 = Number(prompt("Por favor ingrese su primera nota: "))
    let nota2 = Number(prompt("Por favor ingrese su segunda nota: "))
    let nota3 = Number(prompt("Por favor ingrese su tercer nota: "))
    let nota4 = Number(prompt("Por favor ingrese su cuarta nota: "))
    let prom = (nota1 + nota2 + nota3 + nota4) / 4;
    alert("Su nota promedio es: "+prom)
    if(prom>=6){
        alert("Usted aprobó, felicitaciones! :D")
    }
    else{
        alert("Usted desaprobó D:")
    }
}

let nombre = prompt("Por favor, ingrese su nombre: ").toUpperCase()
console.log("Usted ingresó: " + nombre)
let apellido = prompt("Por favor ingrese su apellido: ").toUpperCase()
console.log("Usted ingresó: " + apellido)
let dni = prompt("Por favor ingrese su DNI sin puntos: ")
console.log("Usted ingresó: " + dni)
let alumno = prompt("Usted es el alumno " + nombre + " " + apellido + " de DNI: " + dni + "? \nSi es así, presione S. Si los datos son incorrectos, presione N.").toUpperCase()
let check;
if (alumno == "N") {
    check = false;
}
while (check == false) {
    nombre = prompt("Por favor, ingrese su nombre: ").toUpperCase()
    console.log("Usted ingresó: " + nombre)
    apellido = prompt("Por favor ingrese su apellido: ").toUpperCase()
    console.log("Usted ingresó: " + apellido)
    dni = prompt("Por favor ingrese su DNI sin puntos: ")
    console.log("Usted ingresó: " + dni)
    alumno = prompt("Usted es el alumno " + nombre + " " + apellido + " de DNI: " + dni + "? \nSi es así, presione S. Si los datos son incorrectos, presione N.").toUpperCase()
    if (alumno == "S") {
        check = true;
    }
}

alert("Bienvenido " + nombre + "!")
promediar();



