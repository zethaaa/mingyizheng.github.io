
document.addEventListener('DOMContentLoaded', function () {


  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Añadir la clase de validación de Bootstrap
    form.classList.add('was-validated');

    // Si no es válido, mostramos advertencia y salimos
    if (!form.checkValidity()) {
      if (status) {
        status.innerHTML = '<span class="text-danger">Por favor, completa los campos correctamente ⚠️</span>';
      }
      return;
    }

    // Bloquear botón para evitar envíos dobles
    if (submitBtn) submitBtn.disabled = true;

    // Obtener valores
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Enviar con EmailJS
    emailjs.send("service_gzo5rw7", "template_ff6k08r", {
      from_name: name,
      from_email: email,
      message: message,
      title: "Nuevo Mensaje"
    })
        .then(function () {
          if (status) {
            status.innerHTML = '<span class="text-success">Mensaje enviado correctamente ✅</span>';
          }
          form.reset();
          form.classList.remove('was-validated');
          if (submitBtn) submitBtn.disabled = false;
        }, function (error) {
          console.error("ERROR REAL:", error.text);
          if (status) {
            status.innerHTML = `<span class="text-danger">Error al enviar: ${error.text}</span>`;
          }
          if (submitBtn) submitBtn.disabled = false;
        });

  }, false);

  // Inicializar tooltips de Bootstrap
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });

});