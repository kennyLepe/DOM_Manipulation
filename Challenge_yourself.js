
var seleccion = document.getElementById("container");
console.log("Punto 1: " + seleccion);

var qwerty = document.querySelector("#container");
console.log("Punto 2: " + qwerty);

var second = document.getElementsByClassName("second");
console.log("Punto 3: " + second);

oltag = document.getElementsByTagName("ol")[0];
oltag.style.color = "green";


olthird = oltag.getElementsByClassName("third")[0];
console.log(olthird.innerHTML);

var footer = document.querySelector(".footer");

console.log("Ultima parte");
console.log(footer);
footer.remove();
