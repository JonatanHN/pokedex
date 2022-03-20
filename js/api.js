const searchBtn = document.getElementById('searchBtn');
const inputName = document.getElementById("namePoke");

const getPokemon = async () => {
  const namePokemon = document.getElementById("namePoke").value;
  const name = namePokemon.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const pokemon = data;
			const name = pokemon.name;
			const height = pokemon.height;
			const weight = pokemon.weight;
			const img = pokemon.sprites.front_default;
      const types = pokemon.types[0].type.name;
      const movs = pokemon.moves.length;

			const pokemonInfo = document.getElementById("pokemonInfo");
			pokemonInfo.innerHTML = `
      <h2>${name}</h2>
      <img class="pokemon" src="${img}" alt="${name}">
      <p>Altura: ${height}</p>
      <p>Peso: ${weight}</p>
      <p>Tipo: ${types}</p>
      <p>Movimientos:${movs}</p>
      `;
      const pokemonInfoResponsive = document.getElementById("pokemonInfoResponsive");
      pokemonInfoResponsive.innerHTML = `
      <h2>${name}</h2>
      <img class="pokemon" src="${img}" alt="${name}">
      <p>Altura: ${height}</p>
      <p>Peso: ${weight}</p>
      <p>Tipo: ${types}</p>
      <p>Movimientos:${movs}</p>
      `;
		});
};


// Obtienes los tipos de pokemons

const getTypesPokemons = async () => {
	const url = `https://pokeapi.co/api/v2/type/`;
	await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const types = data.results;
			const select = document.getElementById("typePoke");
			types.forEach((type) => {
				const option = document.createElement("option");
				option.value = type.name;
				option.innerHTML = type.name;
				select.appendChild(option);
			});
		});
};
// llamamos a la funcion
getTypesPokemons();


// Obtenemos los nombres de los pokemons
const getNames = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126"`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const nombres = data.results;
      const select = document.getElementById("nombresPoke");
      nombres.forEach((nombre) => {
        const option = document.createElement("option");
        option.value = nombre.name;
        option.innerHTML = nombre.name;
        select.appendChild(option);
      });
    });
};
// Llamamos a la funcion
getNames();



// Asignamos la tecla enter para enviar el nombre del pokemon
inputName.addEventListener("keydown", () => {
	if (event.key === "Enter") {
		getPokemon();
	}
});


const getPokemonTwo = async () => {
	const namePokemon = document.getElementById("nombresPoke").value;
	const name = namePokemon.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
	await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const pokemon = data;
			const name = pokemon.name;
			const height = pokemon.height;
			const weight = pokemon.weight;
			const img = pokemon.sprites.front_default;
			const types = pokemon.types[0].type.name;
			const movs = pokemon.moves.length;

			const pokemonInfo = document.getElementById("pokemonInfo");
			pokemonInfo.innerHTML = `
      <h2>${name}</h2>
      <img class="pokemon" src="${img}" alt="${name}">
      <p>Altura: ${height}</p>
      <p>Peso: ${weight}</p>
      <p>Tipo: ${types}</p>
      <p>Movimientos:${movs}</p>
      `;
			const pokemonInfoResponsive = document.getElementById(
				"pokemonInfoResponsive"
			);
			pokemonInfoResponsive.innerHTML = `
      <h2>${name}</h2>
      <img class="pokemon" src="${img}" alt="${name}">
      <p>Altura: ${height}</p>
      <p>Peso: ${weight}</p>
      <p>Tipo: ${types}</p>
      <p>Movimientos:${movs}</p>
      `;
		});
};

// Asignamos el boton submit para solicitar la funcion 2
searchBtn.addEventListener('click', () => {
  getPokemonTwo();
});