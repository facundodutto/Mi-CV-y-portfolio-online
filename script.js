// script.js

// Obtener el modal
var modal = document.getElementById('myModal');

// Obtener la imagen del modal y el elemento para el caption
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption"); // Si quieres añadir un caption

function openModal(src) {
    if (modal && modalImg) { // Asegurarse que los elementos existen
        modal.style.display = "block";
        modalImg.src = src;
        // captionText.innerHTML = alt; // Si usas caption
    }
}

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close-modal")[0];

// Cuando el usuario hace clic en <span> (x), cerrar el modal
if (span) {
    span.onclick = function() {
        if (modal) {
            modal.style.display = "none";
        }
    }
}

// Opcional: Cerrar el modal si se hace clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        if (modal) {
            modal.style.display = "none";
        }
    }
}