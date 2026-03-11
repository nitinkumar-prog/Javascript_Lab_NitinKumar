
let title = document.getElementById("title");


title.innerText = "Welcome to JavaScript DOM!";


let button = document.getElementById("btn");


button.addEventListener("click", function() {
  title.innerText = "Text Changed on Click!";
});