// uppgift 1 
let superAlert = function(meddelande){
    alert(meddelande);
    console.log(meddelande);
}
superAlert("I love Javascript, Do you? ");

// uppgift 2 
let miniAlert = function(meddelande2){
    console.log(meddelande2);
}
miniAlert("Hello world!");

// uppgift 3
//setTimeout(functionRef, delay, param1)

setTimeout (superAlert, 2000, "Hej världen!");

// uppgift 4
setTimeout (miniAlert,4000, "Hej igen världen!");

// uppgift 5
setTimeout (() => {console.log("En arrow-funktion, Hello hello")}, 500);

// uppgift 6 &  7 
class Pokemon {
    constructor(name,hp){
        this.name = name;
        this.hp = hp;
    }

    fight(opponent){
        if (this.hp > opponent.hp) {
            return true;
        }
        return false;
    }
    toString(){
        return `pokemon ${this.name} med ${this.hp} hp`;
    }
}

const pikatchu = new Pokemon("Pikatchu", 60);
const raichu = new Pokemon("raichu", 90);


if(pikatchu.fight(raichu)){
    console.log("pikatchu vann!");
} else {
    console.log("Raichu vann!");
}

alert(pikatchu);
console.log(pikatchu);


