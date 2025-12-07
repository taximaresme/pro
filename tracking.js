window.addEventListener("load", () => {
  const trackAndRedirect = (selector, eventName, eventData, redirectUrl) => {
    const button = document.querySelector(selector);
    if (!button) return;

    const handleClick = (e) => {
      e.preventDefault();
      if (window.dataLayer && typeof window.dataLayer.push === "function") {
        window.dataLayer.push({ event: eventName, ...eventData });
      }
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 300);
    };

    button.addEventListener("click", handleClick);
    button.addEventListener("touchstart", handleClick);
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
        "https://wa.me/34606714630?text=Hola,%20quiero%20reservar%20un%20taxi.%20Te%20envio%20mi%20ubicacion%20actual%20y%20espero%20tu%20ubicacion%20en%20tiempo%20real%20para%20ver%20tu%20llegada",
    },
    "https://wa.me/34606714630?text=Hola,%20quiero%20reservar%20un%20taxi.%20Te%20envio%20mi%20ubicacion%20actual%20y%20espero%20tu%20ubicacion%20en%20tiempo%20real%20para%20ver%20tu%20llegada"
  );
});


