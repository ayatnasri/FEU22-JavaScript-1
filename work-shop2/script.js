//tilldelar variablen s1 strängen "Mitt namn är <ditt namn>"
//med hjälp av strängen s1 - tilldelar den nya strängen s2 samma värde fast med ett utropstecken på slutet (2 olika sätt)
let s1 = 'Mitt nämn är Ayat';
let s2 = s1 + "!";
s2 = s1.concat("!");

//skriver ut längden av båda strängarna till skämen
console.log(s1.length);
console.log(s2.length);

//skapa två variabler; s3 med innehållet "Jag gillar", s4 med innehållet "JavaScript".
let s3 = "Jag gillar";
let s4 = "JavaScript";

//med hjälp av concat, s3 och s4 - skriv ut "Jag gillar JavaScript!"
console.log(s3.concat(" " + s4 + "!"));

// med hjälp av concat, padEnd och s3 - skriv ut "Jag gillar glass!!!!!!!!" (24 tecken totalt)
let s5 = (s3.concat (" glass").padEnd(24, "!"));
console.log(s5);


//tilldela resulatet av (6) till en ny variabel - använd replace för att skriva "Jag gillar soligt väder!!!!!!!!"
let s6 = s5.replace(' glass', ' soligt väder');
console.log(s6);
console.log(s6.length);

// du har strängen "Äpplen,Bananer,Mandariner", med hjälp av slice, lastIndexOf skapa strängen "Äpplen,Bananer"
let frukt = "Äpplen,Bananer,Mandariner";
startPos = frukt.undefined;
endPos = frukt.lastIndexOf(",");
console.log(frukt.slice(startPos,endPos));
// Eller 
console.log(frukt.slice(0 , frukt.lastIndexOf(",")));

//  med hjälp av slice, lastIndexOf skapa strängen "Mandariner"
console.log(frukt.slice(frukt.lastIndexOf(",") + 1));
//Eller 
console.log(frukt.slice(frukt.lastIndexOf(",") +1, frukt.length))

//med hjälp av slice, lastIndexOf, indexOf skapa strängen "Bananer"
console.log(frukt.slice(frukt.indexOf(",") + 1  , frukt.lastIndexOf(",")));





// Annan Försläg ..................
// console.log('--Workshop--');

// let s1 = "Marcus Therup";
// console.log(s1);

// let s2 = s1 + "!";
// s2 = s1.concat("!");
// console.log(s2);

// console.log(s1.length);
// console.log(s2.length);


// s3 = "Jag gillar";
// s4 ="JavaScript";
// console.log(s3.concat(" " + s4 + "!"));
// let s5=s3
//     .concat(" ")
//     .concat(s4)
//     .concat("!");
// console.log(s5);

// let s6 = (s3.concat (" glass" ).padEnd(24,"!")); 
// console.log(s6);

// console.log(s6.replace (" glass", " soligt väder"));

// let s7 = "Äpplen,Bananer,Mandariner";
// startPos=s7.undefined;
// endPos=s7.lastIndexOf(",");
// console.log(s7.slice(startPos,endPos));
// console.log(s7.slice(0,s7.lastIndexOf(',')));

// console.log(s7.slice(s7.lastIndexOf(",") + 1));
// console.log(s7.slice(s7.lastIndexOf(",") + 1, s7.length));

// console.log(s7.slice(s7.indexOf(",") + 1, s7.lastIndexOf(",")));