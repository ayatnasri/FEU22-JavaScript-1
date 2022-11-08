
// 2
const me =
`
Ayat Nasri
Planteringsvägen 76c
0762986069
`;

// 3  = 62.800000000000004
let r1 = 10;
const pi = 3.14;
let o1 = (2 * pi * r1);
console.log(o1);

// 4  = 14.758000000000001
let r = "2.35 cm";
let o = 2 * pi * parseFloat(r);
console.log(o);

// 5 & 6 
let tal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tal[0] = 10;
tal[1] = 9; 
tal[2] = 8;
tal[3] = 7;
tal[4] = 6;
tal[5] = 5;  
tal[6] = 4; 
tal[7] = 3; 
tal[8] = 2; 
tal[9] = 1; 
console.log(tal);
 // 7 
let sum = tal.reduce(getSum, 0);
function getSum(total, num){
    return total + Math.round(num);
}
console.log(sum);

const sum2 = tal.reduce((a,b) => a + b);
console.log(sum2);

//Tänk på hur du lägger ihop två tal. Hur gör du om du har två variabler. Och hur skulle du göra om det istället var två positioner i en array? Sedan utökar du det på samma sätt fast för fler platser i array:en
//7
let summa = tal[0] + tal[1] + tal[2] + tal[3] + tal[4] + tal[5] + tal[6] + tal[7] + tal[8] + tal[9];
console.log(summa);



//*********************************************************** 

// --------- Workshop 4  ---------------

// ------ 1 & 2  ------
// Alternative 1:
let radien = "2.35 cm";
let radien1 = 2.35;
if(isNaN(radien) !=true) {
    let omkretsen = 2 * pi * parseFloat(radien);
    console.log(omkretsen);
} else {
    console.log('This is not a valid number');
};
// Alternative 2:
let radie = parseFloat("Martin");
if(!isNaN(radie)) { // ! vänder på ett boolean värde dvs !true = false, !false = true
    let o = 2 * pi * parseFloat(radie);
    console.log(o);
} else {
    console.log('This is not a valid number');
}
// Alternative 3:
if (isNaN(r)) {
    console.log('This is not a valid number')
  } else {
    console.log(o)
}


// ------- 3 -------- 
let a = [];
for(i=0; i<10; i++){
    a[i] = i+1;
};
console.log(a);

// ------- 4 -------- 
// Alternative 1:
for ( let i=0; i<a.length; i++) {
    a[i]= a.length -i;
}
console.log(a);

// Alternative 2:
// let a1 = [];
// for (let i=0; i<a1.lenght/2; i++){
//     let t = a1[i];
//     a1[i] = a1[a1.lenght-i-1];
//     a1[a1.lenght-i-1] = t;
// }
// console.log(a1);

// ------- 5 -------- 
let b = [];
for(i=0; i<100; i++){
    b[i] = i+1;
}
console.log(b);

// ------- 6 -------- 

let summa1 = 0;
for(i=0; i<b.length; i++){
    if(b[i] % 2 == 0 ) {
        summma1 += b[i];
    };
}
console.log(`suman är ${summa1}`);


