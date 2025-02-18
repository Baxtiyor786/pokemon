import pokemons from "./pokemons.js"
const pokemonContainer = document.getElementById("pokemonContainer");
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");
const sortBy = document.getElementById("sortBy");
const searchButton = document.getElementById("searchButton");

function generator(pokemon){
    pokemonContainer.innerHTML = '';
    pokemon.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
         <h3>${pokemon.name}</h3>
         <img src="${pokemon.img}" alt="">
          <p>${pokemon.type}</p>
          <p>${pokemon.weight}</p>
        `;
        pokemonContainer.appendChild(card)
    });
}





function filter(){
    const filteredPokemons = pokemons;

    if (sortBy.value === 'alphabeticalAsc') {
        filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy.value === 'alphabeticalDesc') {
        filteredPokemons.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy.value === 'weightAsc') {
        filteredPokemons.sort((a, b) =>parseFloat(a.weight)-parseFloat(b.weight) );
    } else if (sortBy.value === 'weightDesc') {
        filteredPokemons.sort((a, b) => parseFloat(b.weight)-parseFloat(a.weight) );
    }
    generator(filteredPokemons)
}

searchButton.addEventListener("click", () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchValue)
    );
    generator(filteredPokemons);
});

function filterByType () {
    const selectType = filterType.value.toLowerCase();
    let filteredPokemons;
    if(selectType === "all"){
        filteredPokemons = pokemons;
    } else{
        filteredPokemons = pokemons.filter(pokemon =>
        pokemon.type.includes(filterType.value));
    }
    generator(filteredPokemons);
}

generator(pokemons);
filterType.addEventListener('click', filterByType);
sortBy.addEventListener('change', filter)





















// // // // Vazn bo‘yicha saralash
// // // sortBy.addEventListener("change", () => {
// // //     let sortedPokemons = [...pokemons]; // Asl arrayni buzmaslik uchun nusxa olamiz
// // //     if (sortBy.value === "weight-asc") {
// // //         sortedPokemons.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
// // //     } else if (sortBy.value === "weight-desc") {
// // //         sortedPokemons.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
// // //     }
// // //     generator(sortedPokemons);
// // // });

// // // // Boshlang‘ich sahifa
// // // generator(pokemons);



























// import pokemons from "./pokemons.js";

// const pokemonContainer = document.getElementById("pokemonContainer");
// const searchInput = document.getElementById("searchInput");
// const filterType = document.getElementById("filterType");
// const sortBy = document.getElementById("sortBy");
// const searchButton = document.getElementById("searchButton");

// function generator(pokemonList) {
//     pokemonContainer.innerHTML = '';
//     pokemonList.forEach(pokemon => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//             <h3>${pokemon.name}</h3>
//             <img src="${pokemon.img}" alt="">
//             <p>Type: ${pokemon.type}</p>
//             <p>Weight: ${pokemon.weight}</p>
//         `;
//         pokemonContainer.appendChild(card);
//     });
// }

// function filter() {
//     let filteredPokemons = [...pokemons]; // Asl massivni o'zgartirmaslik uchun nusxa olish

//     // Type bo'yicha filtr qilish
//     if (filterType.value !== "all") {
//         filteredPokemons = filteredPokemons.filter(pokemon => 
//             pokemon.type.toLowerCase() === filterType.value.toLowerCase()
//         );
//     }

//     // Sorting (saralash)
//     if (sortBy.value === 'alphabeticalAsc') {
//         filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortBy.value === 'alphabeticalDesc') {
//         filteredPokemons.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (sortBy.value === 'weightAsc') {
//         filteredPokemons.sort((a, b) =>parseFloat(a.weight)=parseFloat(b.weight) );
//     } else if (sortBy.value === 'weightDesc') {
//         filteredPokemons.sort((a, b) => parseFloat(b.weight)=parseFloat(a.weight) );
//     }

//     generator(filteredPokemons);
// }

// // Qidirish funksiyasi
// searchButton.addEventListener("click", () => {
//     const searchValue = searchInput.value.toLowerCase();
//     const searchedPokemons = pokemons.filter(pokemon => 
//         pokemon.name.toLowerCase().includes(searchValue)
//     );
//     generator(searchedPokemons);
// });

// // Filtrlash va saralash o'zgarishlarini tinglash
// filterType.addEventListener("change", filter);
// sortBy.addEventListener("change", filter);

// // Sahifa yuklanganda barcha Pokémonlarni chiqarish
// generator(pokemons);
