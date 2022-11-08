// uppgift 1 
let enHund = {
    namn : "Fido",
    ras : "Border Collie", 
    vikt : 17
};


// uppgift 2
function skapaHund(nyNamn, nyras, nyVikt){
    let hund = {
        namn : nyNamn,
        ras : nyras,
        vikt: nyVikt
    };
    return hund;
}
let nyHund = skapaHund("Plutten", "Dobberman", 30);
console.log(nyHund);
console.log(skapaHund("labbe", "Labbe", 4));


// uppgift 3
// Alternativ 1 *****
const hundar1 = [
     {
        namn : "Fido1",
        ras : "Border Collie1", 
        vikt : 44
    },
     {
        namn : "Fido2",
        ras : "Border Collie2", 
        vikt : 22
    },
     {
        namn : "Fido3",
        ras : "Border Collie3", 
        vikt : 30
    },
     {
        namn : "Fido4",
        ras : "Border Collie4", 
        vikt : 35
    },
     {
        namn : "Fido5",
        ras : "Border Collie5", 
        vikt : 12
    },
     {
        namn : "Fido6",
        ras : "Border Collie6", 
        vikt : 24
    },
];

// Alternativ 2 *****
const hundar2 = [
    skapaHund("Plutten1", "Dobberman1", 44),
    skapaHund("Plutten2", "Dobberman2", 22),
    skapaHund("Plutten3", "Dobberman3", 30),
    skapaHund("Plutten4", "Dobberman4", 35),
    skapaHund("Plutten5", "Dobberman5", 12),
    skapaHund("Plutten6", "Dobberman6", 40),
];
console.log(hundar1);
console.log(hundar2);
console.log(hundar2.length);
console.log(hundar1[0].vikt);
console.log(hundar2[0].vikt);


// uppgift 4

 function viktAvHundar(lista){
    let sumAvHundVikten = 0;
    for(i=0; i<lista.length; i++){
        let tal = lista[i].vikt;
        sumAvHundVikten += tal;
    } 
    return sumAvHundVikten;
} 
let summan = viktAvHundar(hundar2);
console.log(summan);
console.log(viktAvHundar(hundar2));  
let antal = hundar2.length;
let medelVikten = summan /antal;

console.log(medelVikten);  


 //Uppgift 5 

//  hundar1.forEach( Object => {
//     delete Object.vikt;
//   });

 let lista = hundar1;  
 let min = 1; 
 let max = 45; 
function slumparVikten(){
    slumpTal = min + Math.floor(Math.random()*(max-min+1)); 
    if(min>1){
       console.log("Minsat vikten för hunden är 1 Kilo ")
    }
    if(max>45){
        console.log("Högsta vikten för hunden är 45 kilo ")
    }
    else{
        for(i=0; i<lista.length; i++){ 
            lista[i].vikt = Math.floor(Math.random()* slumpTal);
         }
        return slumpTal;
    }
}
let f = slumparVikten();
console.log(f);
console.log(hundar1);
let hundarNyVikt = [hundar1];
console.log(hundarNyVikt);

//Uppgift 6
function convertToJSON(lista){
    let convert = JSON.stringify(lista);
    return convert;
}
let hundar1JSONsträng = convertToJSON(hundar1);

console.log(hundar1JSONsträng);


//Uppgift 7
let lista2 = hundarNyVikt[0];
console.log(lista2);
 function högstVikt(){
    for(i=0; i<lista2.length; i++){
        let e = Math.max(lista2[i].vikt);
        return e;  
    }
 }
 console.log(lista2);
 console.log(högstVikt());













// hundar1.forEach( Object => {
//      Object.vikt = y;
//   });
//   console.log(hundar1);

 // for(i=0; i<45; i++){
        //   i = Math.floor(Math.random()); 
        //   result += i;  
        // }



// let x; 
// for(i=0; i<hundar1.length; i++){
//      x = hundar1[i].vikt;
//     delete x;
//     console.log(x);
// }
// console.log(x);
// delete hundar1[0].vikt;




// let x;
// let välue = hundar1.replace(x ,y);


// console.log(hundar1);

// let y = slumparVikten();
// let välue = hundar1.replace(x ,y);
// console.log(y);
// console.log(hundar1);
