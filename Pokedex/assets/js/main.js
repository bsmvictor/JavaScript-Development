const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function ConvertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                <div class="header">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#001</span>
                </div>
    
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name}">
                </div>
            </li>
    `;
}

const pokemonList = document.getElementById('pokemon-list');

fetch(url)                                                          // Retorna uma Promise
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {                                           // pokemons é um array de objetos

        for (let i = 0; i < pokemons.length; i++) {                 // Itera sobre o array de objetos
            const pokemon = pokemons[i];
            pokemonList.innerHTML += ConvertPokemonToLi(pokemon);   // Adiciona um elemento <li> ao <ul>
        }
    })
    .catch((error) => console.log(error))

