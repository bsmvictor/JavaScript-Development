function ConvertTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function ConvertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                <div class="header">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.order}</span>
                </div>
    
                <div class="detail">
                    <ol class="types">
                        ${ConvertTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}"
                        alt="${pokemon.name}">
                </div>
            </li>
    `;
}

const pokemonList = document.getElementById('pokemon-list');

pokeApi.getPokemons().then((pokemons = []) => {
    return pokemonList.innerHTML = pokemons.map(ConvertPokemonToLi).join('');
})
