const IconoMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#menu");
  


IconoMenu.addEventListener("click", (e) => {
  //Alternamos ESTILOS del menu y el body
  menu.classList.toggle("active");
 

});
