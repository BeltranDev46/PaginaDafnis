function showPage(pageNumber) {
  // Ocultar todas las páginas
  const pages = document.querySelectorAll("main");
  pages.forEach((page) => page.classList.add("hidden"));

  // Mostrar la página seleccionada
  const selectedPage = document.getElementById("page" + pageNumber);
  selectedPage.classList.remove("hidden");

  // Redimensionar el iframe de la página activa
  const iframe = selectedPage.querySelector("iframe");
  if (iframe) {
    resizeIframe(iframe);
  }
}

function resizeIframe(iframe) {
  iframe.style.height =
    iframe.contentWindow.document.documentElement.scrollHeight + 100 + "px";
  iframe.style.width = "100%";
}

window.addEventListener("message", function (event) {
  if (event.origin === window.location.origin) {
    const iframe = document.getElementById("contentFrame");
    iframe.style.height = event.data + "px";
  }
});
