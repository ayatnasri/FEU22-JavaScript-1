// uppgift 1 
function min1(tal1, tal2){
    if(tal1 < tal2){
        return tal1;
    } else {
        return tal2;
    }
}
console.log(min1(50 , 80));

// uppgift 2
function min2(tal1, tal2, tal3, tal4, tal5){
    return Math.min(tal1, tal2, tal3, tal4, tal5);
}
console.log(min2(50 , 1, 10, 6 , 70));

// uppgift 3
function tärning(minTal, maxTal){
    tärningsKast = minTal +Math.floor(Math.random() * (maxTal- minTal +1));
    if ( minTal !== 1 || maxTal !== 6){
        console.log(" undifiend Min tal bör vara 1 & Max tal bör vara 6  !! ");
        alert("Det är fel nummer!!");
    }
    else {
    return tärningsKast;
    }
}
console.log(tärning(2, 6));

const minTal = 1;
const maxTal = 6;


// uppgift 4
/*
man får bara ett värde när

tal1 > tal2

och undefined när

tal1 < tal2

*/

// uppgift 5 ***  FEL SVAR *** 
let sifferLista = [3, 5, 9, 12, 22, 56];
function listSumma(lista){
    let summa = 0 ; 
    for (let i=0; i<lista.length; i++){
        let tal = lista [i];
        summa += tal;
    }
    return summa;
}
console.log(listSumma());



