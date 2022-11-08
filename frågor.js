[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert( a + " <> " + b );
    return a - b;
  });


  let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });


alert(arr);  

let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)