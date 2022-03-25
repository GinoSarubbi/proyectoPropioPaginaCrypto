const productosbtn = document.querySelector('.nostros'),
 uldrop = document.querySelector('.contenedordenosotrosdrop');
 flecha = document.querySelector('#flechaproductos')

  productosbtn.addEventListener('click', (e) =>{
   

     uldrop.classList.toggle('activo');
     flecha.classList.toggle('activarrotacion')
     
  });



  const searchbtn = document.querySelector('#search'),
 input = document.querySelector('.divinput');

  searchbtn.addEventListener('click', (e) =>{

     input.classList.toggle('activo2');
     
  });