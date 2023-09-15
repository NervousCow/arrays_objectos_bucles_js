"use strict";

const data = [
    {
        id: 1,
        name: "Bulbasaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png",
    },
    {
        id: 2,
        name: "Ivysaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png",
    },
    {
        id: 3,
        name: "Venusaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png",
    }
]

let coleccionArticulosPokemon = ""

for (const pokemon of data) {
  coleccionArticulosPokemon +=
  `
  <article>
        <img
          src=${pokemon.thumbnail}
          class="icon-type"
          alt="icon type"
        />
        <p>
          ${pokemon.name}
        </p>
  </article>
  `
};

const seccion = document.querySelector("section");

seccion.innerHTML = coleccionArticulosPokemon;

const articulos = document.querySelectorAll("article");

for (const pokemon of articulos) {
  pokemon.addEventListener("mouseover", function () {
    pokemon.classList.add("planta");
  });

  pokemon.addEventListener("mouseout", function () {
    pokemon.classList.remove("planta");
  });
};




/* Enunciado
1) Utilice el array data para completar la página de pokemones,
como ejemplo se puede guiar por el siguiente "article", deberá
utilizar un bucle para recorrer data y armar el HTML que introducirá
en "section".

      <article>
        <img
          src="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
          class="icon-type"
          alt="icon type"
        />
        <p>
          Pokemon algo1
        </p>
      </article>

2) Luego de que haya podido generar el contenido dinamicamente, agregar
    a todas las tarjetas de pokemons la propiedades "planta"
    al pasar el mouse por encima (mouseover).

*/

/* Comienza a escribir su código aquí */
