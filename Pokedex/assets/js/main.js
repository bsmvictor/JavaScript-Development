const pokemonList = document.getElementById('pokemon-list');
const loadMoreButton = document.getElementById('load-more');

const maxRecords = 300;
const limit = 10;
let offset = 0;

function LoadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
                    <div class="pokeheader">
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
            `).join('')

        pokemonList.innerHTML += newHml
    })
}

LoadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        LoadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        LoadPokemonItens(offset, limit)
    }

})
