/*
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
        alert("Usted desaprobó :(")
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
*/


//variables
let seguir
let numJ1
let numJ2
let resultadoJ1 = []
let resultadoJ2 = []
let i=0


//funciones
function jugada(jugador, num) {
    num = Number(prompt(jugador + " por favor ingrese su jugada: "))
    while (num > 3 || num < 0) {
        alert("El número ingresado no está dentro del rango aceptado")
        num = Number(prompt("Por favor, " + jugador + " ingrese un número del 1 al 3, siendo 1 piedra, 2 papel y 3 tijera. Si quiere elegir al azar, presione 0"))
    }
    if (num == 0) {
        num = Math.random() * 3 + 1
    }
    return num;
}

function resultado(jugador1, jugador2, jugada1, jugada2) {
    if ((jugada1 == 1 && jugada2 == 1) || (jugada1 == 2 && jugada2 == 2) || (jugada1 == 3 && jugada2 == 3)) {
        switch (jugada1) {
            case 1:
                alert("Ambos jugadres eligieron piedra! EMPATE!");
                break;
            case 2:
                alert("Ambos jugadres eligieron papel! EMPATE!");
                break;
            case 3:
                alert("Ambos jugadres eligieron tijera! EMPATE!");
                break;
        }
        resultadoJ1.push(0)
        resultadoJ2.push(0)
    } else if (jugada1 == 1 && jugada2 == 3) {
        alert(jugador1 + " eligió piedra y " + jugador2 + " eligió tijera, " + jugador1 + " GANA!")
        resultadoJ1.push(1)
        resultadoJ2.push(0)
    } else if (jugada1 == 1 && jugada2 == 2) {
        alert(jugador1 + " eligió piedra y " + jugador2 + " eligió papel, " + jugador2 + " GANA!")
        resultadoJ1.push(0)
        resultadoJ2.push(1)
    } else if (jugada1 == 2 && jugada2 == 3) {
        alert(jugador1 + " eligió papel y " + jugador2 + " eligió tijera, " + jugador2 + " GANA!")
        resultadoJ1.push(0)
        resultadoJ2.push(1)
    } else if (jugada1 == 2 && jugada2 == 1) {
        alert(jugador1 + " eligió papel y " + jugador2 + " eligió piedra, " + jugador1 + " GANA!")
        resultadoJ1.push(1)
        resultadoJ2.push(0)
    } else if (jugada1 == 3 && jugada2 == 1) {
        alert(jugador1 + " eligió tijera y " + jugador2 + " eligió piedra, " + jugador2 + " GANA!")
        resultadoJ1.push(0)
        resultadoJ2.push(1)
    } else if (jugada1 == 3 && jugada2 == 2) {
        alert(jugador1 + " eligió tijera y " + jugador2 + " eligió papel, " + jugador1 + " GANA!")
        resultadoJ1.push(1)
        resultadoJ2.push(0)
    }
}

function total(resultadoJugador){
let total=0
while(i < resultadoJugador.length){
total=resultadoJugador[i]+total
}
return total;
}

function ganador(j1, j2, jugador1, jugador2){
    alert("Se jugaron "+j1.length+" rondas.")
    if(j1>j2){
        alert("El jugador "+jugador1+" ganó "+j1+" rondas. Mientras que el jugador "+jugador2+" ganó"+j2+" rondas. El campeón es: "+jugador1+"!")
    } else if(j1<j2){
        alert("El jugador "+jugador2+" ganó "+j2+" rondas. Mientras que el jugador "+jugador1+" ganó"+j1+" rondas. El campeón es: "+jugador2+"!")
    } else if (j1==j2){
        alert("Ambos jugadores ganaron "+j1+" rondas. EMPATE!")
    }
}


//main
alert("Bienvenidos al piedra, papel y tijera")
let jugador1 = prompt("Ingrese el nombre del jugador 1:").toUpperCase()
let jugador2 = prompt("Ingrese el nombre del jugador 2:").toUpperCase()
alert("Muy bien! Para jugar deberán ingresar un número del 1 al 3, siendo 1 piedra, 2 papel y 3 tijera. Si quiere elegir al azar, presione 0")
do {
    numJ1 = jugada(jugador1)
    numJ2 = jugada(jugador2)
    resultado(jugador1, jugador2, numJ1, numJ2)
    seguir = prompt("Si quiere terminar el juego y ver los resultados, escriba ESC. Si quiere continuar, presione cualquier tecla.").toUpperCase()
} while (seguir != "ESC");

let totalj1=total(resultadoJ1)
console.log(totalj1)
let totalj2=total(resultadoJ2)
console.log(totalj2)

ganador(totalj1, totalj2, jugador1, jugador2)




//hacer dos arrays, uno pa cada jugador, binarios, 1 es que ganó y 0 que perdió, desp sumar con el methodo de arrayas los elementos y con un un if comparar las dos sumas y el jugador que mas haya ganado va a ser el que mas ganó y mediante un objeto mostrar el ganador

