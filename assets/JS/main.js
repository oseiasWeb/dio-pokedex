const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Choque</li>
                    <li class="type">Pequeno</li>
                </ol>
                <img src="/assets/image/image_01.png" alt="${pokemon.name}">
            </div>
        </li>

        <li class="pokemon">
            <span class="number">#002</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Fogo</li>
                    <li class="type">Pequeno</li>
                </ol>
                <img src="/assets/image/image_02.png" alt="${pokemon.name}">
            </div>
        </li>

        <li class="pokemon">
            <span class="number">#003</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Fogo</li>
                    <li class="type">Grande</li>
                </ol>
                <img src="/assets/image/image_03.png" alt="${pokemon.name}">
            </div>
        </li>

        <li class="pokemon">
            <span class="number">#004</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Água</li>
                    <li class="type">Médio</li>
                </ol>
                <img src="/assets/image/image_04.png" alt="${pokemon.name}">
            </div>
        </li>

        <li class="pokemon">
            <span class="number">#005</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Água</li>
                    <li class="type">Pequeno</li>
                </ol>
                <img src="/assets/image/image_05.png" alt="${pokemon.name}">
            </div>
        </li>

        <li class="pokemon">
            <span class="number">#006</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Mental</li>
                    <li class="type">Pequeno</li>
                </ol>
                <img src="/assets/image/image_06.png" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)    
        }
    })
    .catch((error) => console.error(error))
