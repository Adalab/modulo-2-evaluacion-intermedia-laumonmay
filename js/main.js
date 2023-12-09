'use strict'

// QUERY-SELECTOR

const numberInput = document.querySelector('.js_numberInput');  //input
const button = document.querySelector('.js_button');   //boton prueba



// CUANDO CARGA LA PÁGINA 

//nº aleatorio

const numeroAleatorio = getRandomNumber (100);


// FUNCIONES


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    console.log(getRandomNumber);
}

const cambiarPista = () => {

};
const cambiarIntentos = () => {

};

// EVENTOS



//funcion para modificar las pistas

const pista = (event) => {
    event.preventDefault();

    recogerValue();
 
    cambiarPista();

    cambiarIntentos();
};

button.addEventListener('click', (event) => {
    const numeroUsuaria = numberInput.value;
    
});    /// al hacer click





