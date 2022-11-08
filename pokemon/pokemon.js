// 4
let pokemons;

// 2 
function searchBtnClick(){
     console.log('you click me!');
     let searchInput = document.getElementById('search');
     let searchStr = searchInput.value;
     console.log(searchStr);

     // 7
     let matchingPokemons = searchForPokemons(searchStr);
     console.log(matchingPokemons);
     // 9
     renderPokemons_2(matchingPokemons);
}

// 8
function renderPokemons_1(matchingPokemons){
     let resultTag = document.getElementById('result');
     //resultTag.textContent = pokemons;
     // på samma sätt ska vi skaffa pokemons
     let resultString = '';
     for(i=0; i<matchingPokemons.length; i++){
          let pokemon = matchingPokemons[i];
          resultString +=
          ` <div class="pokemonCard">
               <h3>${pokemon.name}</h3>
               <p class="attributes">${pokemon.hp} - ${pokemon.stage}</p>
               <img src="${pokemon.imageUrl}" alt="${pokemon.name}" width="175">
           </div>
          `;
     }
     console.log(resultString);
     resultTag.innerHTML = resultString;
}

// 10 
function renderPokemons_2(matchingPokemons){
     let resultTag = document.getElementById('result');
     for(i=0; i<matchingPokemons.length; i++){
          let pokemon = matchingPokemons[i];
          
          let div = document.createElement('div');
          div.className = 'pokemonCard';
          result.append(div);

          let h3 = document.createElement('h3');
          h3.textContent = pokemon.name;
          div.append(h3);

          let img = document.createElement('img');
          img.src = pokemon.imageUrl;
          img.width = 175;
          div.append(img);

     }

}

//6 
function searchForPokemons(searchStr){
     let result = [];
     for(i=0; i< pokemons.length; i++){
         let pokemon =  pokemons[i];
         if(pokemon.name.includes(searchStr)){
          result[result.length] = pokemon;
         }
     }
     return result;
}

// 3
function loadPokemonFromServren(){
     let response = '[{ "name": "Snorlax", "hp": 190, "imageUrl": "img/IMG_1284.jpeg", "stage": "basic" }, { "name": "Blastoise", "hp": 240, "imageUrl": "img/IMG_1285.jpeg", "stage": "stage 2" },{ "name": "Wishiwashi", "hp": 210, "imageUrl": "img/IMG_1286.jpeg", "stage": "basic" },{ "name": "Sylveon", "hp": 200, "imageUrl": "img/IMG_1287.jpeg", "stage": "stage 1" },{ "name": "Jolteon", "hp": 300, "imageUrl": "img/IMG_1288.jpeg", "stage": "vmax" },{ "name": "Dragonite", "hp": 230, "imageUrl": "img/IMG_1289.jpeg", "stage": "basic" }]';
     let pokemons = JSON.parse(response);
     console.log(pokemons);
     return pokemons;
}

// 1 
function init() {
   const searchBtn = document.getElementById('searchBtn');
   searchBtn.addEventListener(
     'click',
     searchBtnClick
     );

     // 5 
    pokemons = loadPokemonFromServren();
}
init();