document.addEventListener("DOMContentLoaded", function() {
  // === MENÚ DESPLEGABLE ===
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function() {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });

  document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      menu.style.display = "none";
    }
  });

  // === CARRUSELES ===
  function setupCarousel(carouselId, dotsId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll(".carousel-image");
    const dots = document.getElementById(dotsId).querySelectorAll(".dot");

    let currentIndex = 0;

    // Muestra la imagen correspondiente al índice actual
    function showImage(index) {
      images.forEach(img => img.style.display = "none");
      images[index].style.display = "block";

      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    showImage(currentIndex);

    // Función para manejar el deslizamiento hacia adelante
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    // Función para manejar el deslizamiento hacia atrás
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    let touchStartX = 0;
    let touchEndX = 0;

    // Maneja el toque de inicio para el deslizamiento
    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
    }

    // Maneja el toque final para el deslizamiento
    function handleTouchEnd(e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX) nextImage();
      if (touchEndX > touchStartX) prevImage();
    }

    carousel.addEventListener("touchstart", handleTouchStart, false);
    carousel.addEventListener("touchend", handleTouchEnd, false);
  }

  // Inicializa los carruseles A, B, C y D
  setupCarousel("carouselA", "dotsA");
  setupCarousel("carouselB", "dotsB");
  setupCarousel("carouselC", "dotsC");
  setupCarousel("carouselD", "dotsD");  // Inicializa CARRUSEL-D
});
