/* ===== CERRAR MENÚ DE NAVEGACIÓN AL CLICKEAR AFUERA ===== */
document.addEventListener('click', function(event) {
  var isClickInsideMenu = document.getElementById('navbarSupportedContent').contains(event.target);
  var isClickOnToggleButton = event.target.classList.contains('navbar-toggler');

  if (!isClickInsideMenu && !isClickOnToggleButton) {
    var navbarCollapse = document.getElementById('navbarSupportedContent');
    navbarCollapse.classList.remove('show');
    navbarCollapse.style.transition = '0.4s'; // Agregamos la transición aquí
    document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
  }
});

// Cambiar imagen sección detalle del producto
function cambiarImagen(rutaImagen, elementoImagen) {
  // Elimina el estilo "background-color" de todas las imágenes de color
  var imagenesColor = document.getElementsByClassName('product-image color');
  for (var i = 0; i < imagenesColor.length; i++) {
    imagenesColor[i].style.backgroundColor = '';
  }

  // Establece el estilo "background-color" del elemento de imagen seleccionado
  elementoImagen.style.backgroundColor = '#ededed';

  // Cambia la imagen principal
  var imagenPrincipal = document.getElementById('main-image');
  imagenPrincipal.src = rutaImagen;
}

//Contacto de Whatsapp
document.getElementById("whatsappButton").addEventListener("click", function() {
  var phoneNumber = "5354740912"; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje
  var message = document.getElementById("exampleFormControlTextarea1").value;
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  
  window.open(url, "_blank");
});

