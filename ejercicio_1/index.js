/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

const button = document.querySelector(".showme");
console.log(button);
/*

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
const title = document.querySelector("#pillado");
console.log(title);

/*1.3 Usa querySelector para mostrar por consola todos los p*/
const allP = document.querySelectorAll("p");
console.log(allP);

/*1.4 Usa querySelector para mostrar por consola todos los elementos con 
	la clase.pokemon*/
    const allPokemon = document.querySelectorAll(".pokemon");
    console.log(allPokemon);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".*/
const testMe = document.querySelectorAll('[data-function="testMe"]');


  console.log(testMe);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

const thirdTestMe = document.querySelectorAll('[data-function="testMe"]');
if (thirdTestMe.length >=3) {
    const thirdElement = thirdTestMe[2];
    console.log(thirdElement);
;}
