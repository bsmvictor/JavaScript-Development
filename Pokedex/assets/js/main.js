
function ConvertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
                <div class="header">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.number}</span>
                </div>
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
    `;
}

const pokemonList = document.getElementById('pokemon-list');

pokeApi.getPokemons().then((pokemons = []) => {
    return pokemonList.innerHTML = pokemons.map(ConvertPokemonToLi).join('');
})
