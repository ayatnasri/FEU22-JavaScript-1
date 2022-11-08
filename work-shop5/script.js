/******************************************
           Min lösning               >>>>> 
//*****************************************

let frukt = ["Banan", "Apple", "Melon", "Sjärnfrukt", "Papaya"];
let slumpade = [];
for(var i=0; i<100; i++){
    randomfrukt = frukt[Math.floor(Math.random() * frukt.length)];
    slumpade.push(randomfrukt);
}
    console.log(slumpade);

let countOfbanana = 0;
let countOfäpple = 0;
let countOfMelon = 0;
let countOfSjärnfrukt = 0;
let countOfPapaya = 0;

slumpade.forEach(element => {
    if (element === "Banan"){
        countOfbanana += 1;
    } 
    if (element === "Apple"){
        countOfäpple += 1;
    }  
    if (element === "Melon"){
        countOfMelon += 1;
    } 
    if (element === "Sjärnfrukt"){
        countOfSjärnfrukt += 1;
    }
    if (element === "Papaya"){
        countOfPapaya += 1;
    }
});
console.log(`Banan = ${countOfbanana}`);
console.log(`Äpple = ${countOfäpple}`);
console.log(`Melon = ${countOfMelon}`);
console.log(`Sjärnfrukt = ${countOfSjärnfrukt}`);
console.log(`Papaya = ${countOfPapaya}`);
---------------------------------------------------------------------------------------------------------------------------
*/ 
//***************************************** */
// JAG PROVAR ATT LÖSA UPPGIFTEN ...................
//*****************************************

// slumpade.forEach(element => {
// if (element === "Apple"){
//     countOfäpple += 1;
// }
// });
// console.log(`Äpple = ${countOfäpple}`);

// slumpade.forEach(element => {
// if (element === "Melon"){
//     countOfMelon += 1;
// }
// });
// console.log(`Melon = ${countOfMelon}`);

// slumpade.forEach(element => {
// if (element === "Sjärnfrukt"){
//     countOfSjärnfrukt += 1;
// }
// });
// console.log(`Sjärnfrukt = ${countOfSjärnfrukt}`);

// slumpade.forEach(element => {
// if (element === "Papaya"){
//     countOfPapaya += 1;
// }
// });
// console.log(`Papaya = ${countOfPapaya}`);


/*
    let numberOfBanans = "Banan";
    let numberOfApples = "Apple";
    let nummberOfMelons = "Melon";
    let numberOfSjarnfrukt = "Sjärnfrukt";
    let nummberOfPapaya = "Papaya";
    for(i=0; i<slumpade.length; i++){
        switch(slumpade[i]){
            case "Banan":
                numberOfBanans++;
                break;
            case "Apple":
                numberOfApples++;
                break;
            case "Melon":
                nummberOfMelons++;
                break;
            case "Sjärnfrukt":
                numberOfSjarnfrukt++;
                break;
            case "Papaya":
                nummberOfPapaya++;
        }
        console.log(slumpade[i]);
    }

*/


//*****************************************
//     lärarens lösning                >>>> 
//*****************************************

let frukter = ["Banan", "Äpple", "Melon", "Sjärnfrukt", "Papaya"]
console.log(frukter);

// Uppgift 2

// loop - 100gr
    // slumpa ett värde mellan 1-5
    // välja frukt från "frukter"
    // stoppa in frukt i ny lista
let slumpadeFrukter = [];
for(var i=0; i<100; i++){
    let slumpTal = Math.floor(Math.random() * 5) + 1;       // Slumptal 1-5
    let slumpadFrukt = frukter[slumpTal-1];   // frukter har index 0-4
    slumpadeFrukter[i] = slumpadFrukt;
} 
console.log(slumpadeFrukter);

let Banan=0;
let Äpple=0;
let Melon=0;
let Sjärnfrukt=0;
let Papaya=0;

for (let i=0; i < slumpadeFrukter.length; i++) {
    let frukt = slumpadeFrukter[i];
    switch(frukt) {
        case 'Banan':
            Banan++;
            break;
        case 'Äpple':
            Äpple++;
            break;
        case 'Melon':
            Melon++;
            break;
        case 'Sjärnfrukt':
            Sjärnfrukt++;
            break;
        case 'Papaya':
            Papaya++;
            break;                                    
    }
}
console.log(`
Banan=${Banan}
Äpple=${Äpple}
Melon=${Melon}
Sjärnfrukt=${Sjärnfrukt}
Papaya=${Papaya} 
`);

let antalFrukter = [];
for (let i=0; i < slumpadeFrukter.length; i++) {
    let frukt = slumpadeFrukter[i];
    if(antalFrukter[frukt] === undefined) {
        antalFrukter[frukt] = 1;
    } else {
        antalFrukter[frukt] = antalFrukter[frukt] + 1;
    };
}
console.log(antalFrukter);