// uppgift 3
/*
function clickHandel1(){
    // alert("Hello World!");
   
}
*/
// uppgift 4
/*
function clickHandel1(){
    const hundNamn = document.getElementById("name");
    alert(`Hunds namn är ${hundNamn.value}`);
}
*/
// uppgift 5
/*
function clickHandel1(){
const hundVikt = document.querySelectorAll("#weight");
x = hundVikt[0];
console.log(x.value);
}
*/
// uppgift 6
/*
function clickHandel1(){
     const spanValue = document.getElementById("status");
     console.log(spanValue);
}
*/
// uppgift 7  uppgift 8 & 9

function clickHandel1(){
     let hundVikt = document.querySelectorAll('#weight');
     vikt = hundVikt[0];
     x = vikt.value;
     console.log(x);

     const span = document.getElementById('status');

     let notNaN = "Thanks for participating";
     let nanNummer =  "Invalid number (Weight)";

     if(!isNaN(x)){
          span.innerHTML = notNaN; 
          span.className = 'success';
          
     } else {
          span.innerHTML = nanNummer;
          span.className = 'failure';
          vikt.focus();
     }
}

/*
function clickHandel1(){
     const spanValue = document.getElementById("status");
     const number = spanValue.textContent;

     let notNaN = "Thanks for participating";
     let nanNummer =  "Invalid number (Weight)";

     function viktNummer (){
          if(number == !isNaN){
           spanValue.innerHTML = notNaN;
           spanValue.className = 'success';

          } else {
           spanValue.innerHTML = nanNummer;
           spanValue.className = 'failure';
          }
     }
     console.log(viktNummer()); 
}
 */





