/*
1Select the section with a container id without using querySelector.
2Select the section with a container id using querySelector.
3Select all the items list with a class of "second".
4Select a list item with a class of third, but only the list item inside of the ol tag.
5Give the text "Hello!" to the section with a container id.
6Add the main class to the div with a footer class.
7Remove the main class on the div with a footer class.
8Create a new li element.
9Give the li the text "four".
10Append the li to the ul element. */

var seleccion = document.getElementById("container");
console.log("Punto 1: " + seleccion);

var qwerty = document.querySelector("#container");
console.log("Punto 2: " + qwerty);

var second = document.getElementsByClassName("second");
console.log("Punto 3: " + second);

oltag = document.getElementsByTagName("ol")[0];
olthird = oltag.getElementsByClassName("third")[0];
console.log(olthird.innerHTML);