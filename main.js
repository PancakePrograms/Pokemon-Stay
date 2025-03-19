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

const owned_container = document.querySelector(".ownedPokemon_container");
const pokemon_list = document.getElementById("pokemonList");

pokemon_list.addEventListener("click", () => {
  owned_container.style.visibility = "visible";
  owned_container.style.top = "30px";
});

const close_owned_container = document.querySelector(".closePokemon_pokemon");

close_owned_container.addEventListener("click", () => {
  owned_container.style.visibility = "hidden";
  owned_container.style.top = "100vh";
})

const ownedPokemonGrid = document.querySelector(".ownedPokemon_grid")
let pikachu = {
  image: "/photos/pikachu.png",
  name: "Pikachu",
  type: "Electric",
  level: 5,
  hp: 140,
  atk: 100,
  def: 100
}
let owned_pikachu = 1;

function collection() {
  if (owned_pikachu = 1) {
    let pikachu_div = document.createElement("div");
    pikachu_div.classList.add("owned_pokemon");
    pikachu_div.innerHTML = `<img src="${pikachu.image}" alt="${pikachu.name}">
    <span>${pikachu.name}</>`
    ownedPokemonGrid.appendChild(pikachu_div);
  }
}
function addPikachu() {
  setInterval(collection, 1000);
}
addPikachu();