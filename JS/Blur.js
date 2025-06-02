¡
  const toggler = document.querySelector('.navbar-toggler');
  const overlay = document.getElementById('blur-overlay');
  const collapse = document.getElementById('navbarNav');

  // Escuchar cuando se abre o cierra el menú
  toggler.addEventListener('click', () => {
    setTimeout(() => {
      if (collapse.classList.contains('show')) {
        overlay.style.display = 'block';
      } else {
        overlay.style.display = 'none';
      }
    }, 300); // espera a que se complete la animación
  });