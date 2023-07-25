// Ejercicio 1

fetch("https://pokeapi.co/api/v2/pokemon/40")
  .then((data) => data.json())
  .then((data) => {
    let tipos = data.types;
    console.log({ name: data.name });
    tipos.forEach((element) => {
      console.log({ type: element.type.name });
    });
  });

// Ejercicio 2
async function peticionLibro(title) {
  let data = await fetch(
    `http://openlibrary.org/search.json?q=${title.replace(" ", "+")}`
  );
  data = await data.json();
  console.log("Autores: ");
  data.docs[0].author_name.forEach((e) => console.log(e));
}
// peticionLibro("i robot");

// Ejercicio 3

async function peticionAutores(author) {
  let data = await fetch(
    `http://openlibrary.org/search.json?author=${author.replace(" ", "+")}`
  );
  data = await data.json();
  console.log("Libros: ");
  //   console.log(Object.keys(data.docs[0]));
  data.docs.forEach((e) => console.log(e.title));
}
// peticionAutores("asimov");

// Ejercicio 4

async function peticionBanda(banda) {
  let data = await fetch(
    `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${banda.replace(
      " ",
      "+"
    )}`
  );
  data = await data.json();
  console.log("genero: ");
  console.log(data.artists[0].strGenre);
}
// peticionBanda("coldplay");

// ejercicio 5

async function ejercicio_5(personaje_id) {
  let data = await fetch(
    `https://swapi.dev/api/people/${personaje_id.replace(" ", "+")}/`
  );
  data = await data.json();
  let films = data.films;
  for (let i = 0; i < films.length; i++) {
    let element = films[i];
    film_title = await fetch(element);
    film_title = await film_title.json();
    film_title = film_title.title;
    films[i] = film_title;
  }
  console.log("Personaje: ", data.name);
  console.log("Peliculas: ");
  films.forEach((e) => console.log(e));
}

// ejercicio_5("1");

async function ejercicio_7(generacion) {
  let data = await fetch(`https://pokeapi.co/api/v2/generation/${generacion}/`);
  data = await data.json();
  let species = data.pokemon_species;
  species = await Promise.all(
    species.map(async (specie) => {
      let name = specie.name;
      let specie_data = await fetch(specie.url);
      specie_data = await specie_data.json();
      let url_pokemon = specie_data.varieties[0].pokemon.url;
      let pokemon_data = await fetch(url_pokemon);
      pokemon_data = await pokemon_data.json();
      const response = {
        name: name,
        size: pokemon_data.height,
        weight: pokemon_data.weight,
        moves: await Promise.all(pokemon_data.moves.map((e) => e.move.name)),
        types: await Promise.all(pokemon_data.types.map((e) => e.type.name)),
      };
      return response;
    })
  );
  return species;
}
ejercicio_7(1).then((e) => console.log(e));
