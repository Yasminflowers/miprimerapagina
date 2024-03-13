let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
}



//alert("Hola este es mi Javascript");
let nombre = "Ariel";
nombre = "Percy";

let nombre3 = "Wenddy";

var nombre1 = "Ariel";

const nombre2 = "Ariel";
//nombre2 = "Ariana";



console.log(nombre);
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

//SELECCIONAR ELEMENTOS

let contenidoTítulo = "Nombre";

let título = document.querySelector(".logo.fuente")
titulo.innerHTML = contenidoTítulo;

//CONDICIONALES
let textoTítulo = título.innerText;
console.log(textoTítulo);

if (textoTítulo == "Nombre") {
    título.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}



