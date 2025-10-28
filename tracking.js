document.addEventListener("DOMContentLoaded", function () {
  // Botón de llamada
  const callBtn = document.querySelector(".btn-call");
  if (callBtn) {
    callBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Evita que el navegador siga el href inmediatamente
      dataLayer.push({
        event: "conversion_llamada",
        telefono: "+34606714630"
      });
      setTimeout(function () {
        window.location.href = "tel:+34606714630";
      }, 500); // 2 segundos de margen
    });
  }

  // Botón de WhatsApp
  const whatsappBtn = document.querySelector(".btn-whatsapp");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function (e) {
      e.preventDefault();
      dataLayer.push({
        event: "conversion_whatsapp",
        whatsapp_url: "https://wa.me/34622432522?text=Hola,%20quiero%20reservar%20un%20taxi"
      });
      setTimeout(function () {
        window.location.href =
          "https://wa.me/34622432522?text=Hola,%20quiero%20reservar%20un%20taxi";
      }, 500);
    });
  }
});
