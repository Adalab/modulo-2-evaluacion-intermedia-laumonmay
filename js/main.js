"use strict";

// 1. QUERY-SELECTOR

const numberInput = document.querySelector(".js_numberInput"); //input
const button = document.querySelector(".js_button"); //boton
const clue = document.querySelector(".js_clue"); // pistA
const opportunitiesBox = document.querySelector(".js_opportunitiesBox");

// 2. VARIABLES GLOBALES:

const randomNumber = getRandomNumber(100); // variable para guardar el nº aleatorio al llamar a la funcion.

let opportunityCounter = 0; // creo variable para guardar el intento origen 0

// 3. FUNCIONES

// Punto 2. Generar un número aleatorio con la ayuda de Math.random y Math.ceil. Función para crear numero aleatorio:

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// funcion para recoger el valor del input:
function getNumberInput() {
  return parseInt(numberInput.value); // convertimos el string en nº
}

// funcion para Comparar el nº de la usuaria con el nº aleatorio:
function checkNumbers(userNumber, randomNumber) {
 
   // Punto 5. Comparar si el numeroUsuaria con el numeroAleatorio, y pintar las pistas correspondientes en la pantalla.

   if (userNumber < 1 || userNumber > 100) {
    giveClue(`El número debe estar entre 1 y 100.`); // llamo a la funcion para introducir este argumento
  } else if (userNumber < randomNumber) {
    giveClue(`Pista: Demasiado bajo.`);
  } else if (userNumber > randomNumber) {
    giveClue(`Pista: Demasiado alto.`);
  } else {
    giveClue(`Has ganado campeona!!!`);
  }
};

// función para cambiar el contenido de clue por message:

function giveClue (message) {
    clue.innerHTML = message;
}

// función contador:

function opportunities(){
    opportunityCounter++;  // le sumo 1
    opportunitiesBox.innerHTML = `Número de intentos: ${opportunityCounter}`; // cambio el innerHTML para actualizarlo
}

 
// 4. EVENTOS

//Punto 4. Al pulsar el botón de Prueba, acceder al contenido del input y mostrarlo en la consola.

//creo una función handleClick (manejadora)
function handleClick(event) {
  const userNumber = getNumberInput(); // guardar en variable el valor de la función
  checkNumbers(userNumber, randomNumber); // llamo a la funcion para comparar los números
  opportunities(); // llamo a la funcion para contar los intentos
}


button.addEventListener("click", handleClick);



// 5. CÓDIGO QUE SE EJECUTA CUANDO CARGA LA PÁGINA

// Punto 3. Mostrar en consola el número aleatorio generado para poder saber qué número se ha generado y poder hacer pruebas.

console.log(randomNumber);
