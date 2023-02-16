const contenedorCharmander= document.querySelector('.contenedor-charmander');

function traerCharmander(evolution) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mostrarCharmander(data);
    })
}

function mostrarCharmander(pokemon) {
    const gif = document.createElement('img');
    gif.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
    
    contenedorCharmander.appendChild(gif);

    const name = document.createElement('h3');
    name.textContent = `Name: ${pokemon.species.name}`;

    const weight = document.createElement('h4');
    weight.textContent = `Weight: ${pokemon.weight}`;

    const attack = document.createElement('h4');
    attack.textContent = `Attack: ${pokemon.stats[1].base_stat}`;
    


    const div = document.createElement('div');
    div.appendChild(name);
    div.appendChild(weight);
    div.appendChild(attack);


    contenedorCharmander.appendChild(div);
}

traerCharmander(4);

contenedorCharmander.addEventListener('click', (e) => {
    traerCharmander(5);
    traerCharmander(6);

},{once: true});