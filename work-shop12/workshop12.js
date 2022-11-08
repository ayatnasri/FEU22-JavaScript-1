
function createImageClick() {
     let result =  $('#result'); 
     let img =  $(`<img src="https://i.pinimg.com/564x/81/fd/77/81fd77525abd5b659a985017922741c6.jpg"
     alt="Effel-Tower" width="300"/>`);
     if(result.html() == ''){
          console.log('show');
          result.append(img);
     } else {
          console.log('hide');
          result.html('');
     }
}

function init(){
     console.log("workShop 12");
     $('#createImage').on('click', createImageClick);
}
$(document).ready((event) => {
     init();
});
