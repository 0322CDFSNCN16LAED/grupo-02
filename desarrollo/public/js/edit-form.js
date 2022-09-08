const formulario = document.querySelector("#formulario");

window.onload = function () {
  formulario.nombre.focus();

  formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const errores = [];

    if (formulario.nombre.value == "") {
      errores.push("Ingresá el nombre del producto");
      formulario.nombre.parentElement.classList.add("is-invalid");
      formulario.nombre.parentElement.classList.remove("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML =
        "* Ingresá el nombre del producto";
    } else if (formulario.nombre.value.length < 5) {
      errores.push(
        "El nombre del producto debe tener al menos cinco caracteres"
      );
      formulario.nombre.parentElement.classList.add("is-invalid");
      formulario.nombre.parentElement.classList.remove("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML =
        "* El nombre del producto debe tener al menos cinco caracteres";
    } else {
      formulario.nombre.parentElement.classList.remove("is-invalid");
      formulario.nombre.parentElement.classList.add("is-valid");
      formulario.nombre.parentElement.querySelector(".error").innerHTML = "";
    }

    if (formulario.descripcion.value == "") {
      errores.push("Ingresá una descripción del producto");
      formulario.descripcion.parentElement.classList.add("is-invalid");
      formulario.descripcion.parentElement.classList.remove("is-valid");
      formulario.descripcion.parentElement.querySelector(".error").innerHTML =
        "* Ingresá una descripción del producto";
    } else if (formulario.descripcion.value.length < 20) {
      errores.push("La descripción debe tener al menos 20 caracteres");
      formulario.descripcion.parentElement.classList.add("is-invalid");
      formulario.descripcion.parentElement.classList.remove("is-valid");
      formulario.descripcion.parentElement.querySelector(".error").innerHTML =
        "* La descripción debe tener al menos 20 caracteres";
    } else {
      formulario.descripcion.parentElement.classList.remove("is-invalid");
      formulario.descripcion.parentElement.classList.add("is-valid");
      formulario.descripcion.parentElement.querySelector(".error").innerHTML =
        "";
    }

    if (errores.length == 0) {
      formulario.submit();
      console.log("Sin errores");
    } else {
      console.log(errores);
    }
  });
};

function fileValidation() {
  var fileInput = 
      document.getElementById('imagen');
    
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = 
          /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
  if (!allowedExtensions.exec(filePath)) {
      alert('Ingresá un archivo válido (JPG, JPEG, PNG, GIF)');
      fileInput.value = '';
      return false;
  } 
  else 
  {
  return true;
}
}
