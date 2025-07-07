
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("enviar-correo.php", {
      method: "POST",
      body: formData
    })
      .then(response => {
        if (response.ok) {
          document.getElementById("mensaje-exito").style.display = "block";
          document.getElementById("mensaje-error").style.display = "none";
          this.reset();
        } else {
          document.getElementById("mensaje-error").style.display = "block";
          document.getElementById("mensaje-exito").style.display = "none";
        }
      })
      .catch(() => {
        document.getElementById("mensaje-error").style.display = "block";
        document.getElementById("mensaje-exito").style.display = "none";
      });
  });