const pokeApi = {}

function ConvertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())    //buscando os detalhes de um pokemon
        .then(ConvertPokeApiDetailToPokemon)  //convertendo os detalhes para um objeto Pokemon
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)   //buscando a lista de pokemons
        .then((response) => response.json())    //convertendo a resposta para json
        .then((jsonBody) => jsonBody.results)   //pegando a lista de pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))    //buscando os detalhes de cada pokemon
        .then((detailRequests) => Promise.all(detailRequests))  //esperando todas as requisições terminarem
        .then((pokemonsDetails) => pokemonsDetails)   //retornando os detalhes dos pokemons

}