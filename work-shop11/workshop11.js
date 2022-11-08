
function createImageClick() {
     console.log('You click me!');
     let resultTag = document.querySelector('#result');
     if(resultTag.innerHTML == ''){
          let img = document.createElement('img');
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wxcvOKhrNFNRw0HCdm7kCMhkEHIC0eEwgA&usqp=CAU';
          resultTag.append(img);
          console.log("show");
          console.log(img);
     } else {
          resultTag.innerHTML = '';
          console.log("hide");
     }
}

function init(){
     console.log("init function");
     const searchBTN = document.getElementById("createImage");

     searchBTN.addEventListener(
          'click',
          createImageClick
     ); 
}
init();


// function createImageClick() {
//      let resultTag = document.getElementById('result');
//      console.log(resultTag);

//      let div = document.createElement('div');
//      div.className = 'architectImage';
//      resultTag.append(div);

//      let h3 = document.createElement('h3');
//      h3.textContent = "The buildning's name is: Eiffel Tower";
//      div.append(h3);

//      let img = document.createElement('img');
//      img.setAttribute ('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wxcvOKhrNFNRw0HCdm7kCMhkEHIC0eEwgA&usqp=CAU") ;
//      img.setAttribute('alt', 'Paris');
//      img.setAttribute('height', 'auto');
//      img.setAttribute('width', 500);
//      div.append(img);

//      document.body.appendChild(div);
// }

// function init(){
//      console.log("init function");
//      const searchBTN = document.getElementById("createImage");

//      searchBTN.addEventListener(
//           'click',
//           createImageClick
//      ); 
// }
// init();
