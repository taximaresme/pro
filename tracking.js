document.addEventListener("DOMContentLoaded", () => {
  const trackAndRedirect = (selector, eventName, eventData, redirectUrl) => {
    const button = document.querySelector(selector);
    if (!button) return;

    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.dataLayer && typeof window.dataLayer.push === "function") {
        dataLayer.push({ event: eventName, ...eventData });
      }
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 300);
    });
  };

  trackAndRedirect(
    ".btn-call",
    "conversion_llamada",
    { telefono: "+34606714630" },
    "tel:+34606714630"
  );

  trackAndRedirect(
    ".btn-whatsapp",
    "conversion_whatsapp",
    {
      whatsapp_url:
        "https://wa.me/34622432522?text=Hola,%20quiero%20reservar%20un%20taxi",
    },
    "https://wa.me/34622432522?text=Hola,%20quiero%20reservar%20un%20taxi"
  );
});

