//this is for the action bar on the home screen

const action = document.querySelector(".actionsButton");
const nav = document.querySelector(".actionContainer");
const navButtonsDiv = document.querySelector(".nav_buttons")
const battleButton = document.getElementById("battleIcon");
const pokemon = document.getElementById("pokemonList");

let container = "closed";

action.addEventListener("click", () => {
  if(container === "closed") {
  console.log("clicked");
  nav.style.height = "150px";
  nav.style.borderRadius = "15px";
  navButtonsDiv.style.visibility = "visible";
  navButtonsDiv.style.opacity = "1";
  battleIcon.style.height = "10vh";
  pokemon.style.height = "10vh";
  container = "open";
  return;
  }
  
  if (container === "open") {
    nav.style.height = "1px";
    navButtonsDiv.style.visibility = "hidden";
    navButtonsDiv.style.opacity = "0"
    battleIcon.style.height = "0"
    pokemon.style.height = "0"
    
    container = "closed";
    
  }
});
//--------------
