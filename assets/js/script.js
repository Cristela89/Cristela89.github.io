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

  // === SCROLL INSTANTÁNEO y CIERRE DEL MENÚ ===
  const sobreMiBtn = document.getElementById('sobre-mi');
  const educacionBtn = document.getElementById('educacion');
  const experienciaBtn = document.getElementById('experiencia');
  const portafolioBtn = document.getElementById('portafolio');
  const contactoBtn = document.getElementById('contacto');

  // Función para hacer scroll a las posiciones específicas y cerrar el menú
  function scrollAndCloseMenu(scrollToPosition) {
    window.scrollTo(0, scrollToPosition);
    menu.style.display = "none"; // Cierra el menú después de hacer scroll
  }

  sobreMiBtn.addEventListener('click', function() {
    scrollAndCloseMenu(0); // Ir al inicio de la página
  });

  educacionBtn.addEventListener('click', function() {
    scrollAndCloseMenu(1410); // Ir a la sección Educación
  });

  experienciaBtn.addEventListener('click', function() {
    scrollAndCloseMenu(2730); // Ir a la sección Experiencia
  });

  portafolioBtn.addEventListener('click', function() {
    scrollAndCloseMenu(6680); // Ir a la sección Portafolio
  });

  contactoBtn.addEventListener('click', function() {
    scrollAndCloseMenu(document.body.scrollHeight); // Ir al final de la página
  });

  // === CARRUSELES ===
  function setupCarousel(carouselId, dotsId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll(".carousel-image");
    const dots = document.getElementById(dotsId).querySelectorAll(".dot");

    let currentIndex = 0;

    // Muestra la imagen correspondiente al índice actual
    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    showImage(currentIndex);

    // Función para avanzar a la siguiente imagen (pero sin volver a la primera)
    function nextImage() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
      }
    }

    // Función para retroceder a la imagen anterior (pero sin ir a la última)
    function prevImage() {
      if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
      }
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
  setupCarousel("carouselD", "dotsD");
});
