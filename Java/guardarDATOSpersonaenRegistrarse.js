window.onload = iniciar;

var personas = [];    //CREANDO VARIABLE PERSONAS PARA ALMACENAR LOS VALORES DE LOS INPUT, YA QUE SE BORRAN LOS DATOS AL REFRESCAR LA PAGINA, PARA ESO CREAMOS ESTO PARA ALMACENARLOS Y NO PERDERLOS.

function iniciar() {
  let btnAgregar = document.getElementById("btnAgregar");
  btnAgregar.addEventListener("click", clickBtnAgregar);
}

  //SE PUEDE HACER ASI PERO ES MUY LARGO, AHORA DOY UN EJEMPLO MAS CORTO
  //let txtNombre = document.getElementById("txtNombre");
  // let valornombre = txtNombre.value;
  //  let txtApellido = document.getElementById("txtApellido");
  // let valorapellido = txtApellido.value;
  // let txtTelefono = document.getElementById("txtTelefono");
  //  let valortelefono = txtTelefono.value;
  // let txtEmail = document.getElementById("txtEmail");
  //  let valoremail = txtEmail.value;

  //EJEMPLO: mas corto
  function clickBtnAgregar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
 
    var persona = {     
        "nombre":  nombre,
        "apellido": apellido
        
    }

  personas.push(persona);
    debugger;
}
  
    