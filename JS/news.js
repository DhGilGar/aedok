  window.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('section-Video');
    const closeBtn = document.getElementById('close-video');

    // Mostrar el popup al cargar
    popup.classList.remove('closed');

    // Cerrar el popup al hacer clic en el botón
    closeBtn.addEventListener('click', () => {
      popup.classList.add('closed');
    });
  });