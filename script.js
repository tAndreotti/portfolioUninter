// script.js
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");

      if (href) {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 1000);
      }
    });
  });

  if (document.body.classList.contains("fade-in")) {
    document.body.classList.remove("fade-in");
  } else {
    document.body.classList.add("fade-in");
  }

  // Funcionalidade do botão de envio do formulário
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.textContent = "Mensagem Enviada";
      submitButton.disabled = true;
      submitButton.style.backgroundColor = "#4BB543";
      submitButton.style.color = "#fff";
      submitButton.style.cursor = "default";
    });
  }
});
