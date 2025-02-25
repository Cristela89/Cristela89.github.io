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

    function showImage(index) {
      images.forEach(img => img.style.display = "none");
      images[index].style.display = "block";
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    showImage(currentIndex);

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    let touchStartX = 0, touchEndX = 0;
    let touchStartY = 0, touchEndY = 0;

    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }

    function handleTouchEnd(e) {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      let deltaX = touchEndX - touchStartX;
      let deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) { // Solo cambiar si el deslizamiento es horizontal
        if (deltaX < 0) nextImage();
        if (deltaX > 0) prevImage();
      }
    }

    carousel.addEventListener("touchstart", handleTouchStart, false);
    carousel.addEventListener("touchend", handleTouchEnd, false);
  }

  setupCarousel("carouselA", "dotsA");
  setupCarousel("carouselB", "dotsB");
  setupCarousel("carouselC", "dotsC");
  setupCarousel("carouselD", "dotsD");
});
