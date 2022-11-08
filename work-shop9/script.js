// uppgift 2
const rubriken = document.getElementById("rubrik");
console.log(rubriken.textContent);

// uppgift 3
const paragraphs = document.getElementsByClassName('content');
console.log(paragraphs);
console.log(paragraphs.length);

// uppgift 4
const elementH1 = document.getElementsByTagName('h1');
console.log(elementH1);
alert(elementH1[0].textContent);

// uppgift 5
let a = document.querySelectorAll('.obs');
console.log(a);
console.log(a[0].innerHTML);

let b = document.querySelectorAll('p.content');
console.log(b);
for(let i=0; i<b.length; i++){
     console.log(b[i].textContent);
}

let c = document.querySelectorAll('#resultat p');
console.log(c);

// uppgift 6
let d = document.querySelectorAll('input');
function räknaAntal(e){
     antal = e.length; 
     return antal;  
}
console.log(räknaAntal(d));