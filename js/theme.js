document.addEventListener('DOMContentLoaded', function(){

  // =========================
  // FOOTER YEAR
  // =========================
  document.getElementById('year').textContent = new Date().getFullYear();


  // =========================
  // MODAL DINÁMICO PROYECTOS
  // =========================
  const projectModal = document.getElementById('projectModal');

  projectModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;

    const title = button.getAttribute('data-title');
    const img = button.getAttribute('data-img');
    const desc = button.getAttribute('data-desc');
    const code = button.getAttribute('data-code');

    projectModal.querySelector('.modal-title').textContent = title;
    projectModal.querySelector('#modalImg').src = img;
    projectModal.querySelector('#modalImg').alt = title;
    projectModal.querySelector('#modalDesc').textContent = desc || '';
    projectModal.querySelector('#modalCode').href = code || '#';
  });


  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (event) {

    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      emailjs.send("service_gzo5rw7", "template_ff6k08r", {
        from_name: name,
        from_email: email,
        message: message,
        title: "Nuevo Mensaje"
      })
          .then(function () {

            const status = document.getElementById('formStatus');
            if(status){
              status.innerHTML = '<span class="text-success">Mensaje enviado correctamente ✅</span>';
            }

            form.reset();

          }, function (error) {
            // Esto imprimirá el TEXTO del error (ej: "reCAPTCHA is required" o "Invalid User ID")
            console.error("ERROR REAL:", error.text);
            alert("EmailJS dice: " + error.text);
          });
    }

    form.classList.add('was-validated');

  }, false);


  // =========================
  // TOOLTIPS BOOTSTRAP
  // =========================
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

  tooltipTriggerList.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });

});