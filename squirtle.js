const contenedorSquirtle= document.querySelector('.contenedor-squirtle');

function traerSquirtle(evolution) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mostrarSquirtle(data);
    })
}

function mostrarSquirtle(pokemon) {
    const gif = document.createElement('img');
    gif.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
    
    contenedorSquirtle.appendChild(gif);

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


    contenedorSquirtle.appendChild(div);
}

traerSquirtle(7);

contenedorSquirtle.addEventListener('click', (e) => {
    traerSquirtle(8);
    traerSquirtle(9);

},{once: true});