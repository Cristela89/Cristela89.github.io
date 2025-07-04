    /* VERSIÓN MOBILE */    
// Botón flor-home: vuelve al inicio
document.querySelector('.icon-flor-home-mobile').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Botón hamburger: muestra/oculta menú
document.querySelector('.icon-hamburger-mobile').addEventListener('click', function () {
  const nav = document.querySelector('.nav-buttons-mobile');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Función para manejar scroll y cerrar menú
function scrollYandClose(yPos) {
  window.scrollTo({
    top: yPos,
    behavior: 'smooth'
  });
  document.querySelector('.nav-buttons-mobile').style.display = 'none';
}

// Listeners para los botones del menú móvil
document.getElementById('home-mobile-btn').addEventListener('click', function () {
  scrollYandClose(0);
});

document.getElementById('sobre-mi-mobile-btn').addEventListener('click', function () {
  scrollYandClose(800);
});

document.getElementById('educacion-mobile-btn').addEventListener('click', function () {
  scrollYandClose(3100);
});

document.getElementById('experiencia-mobile-btn').addEventListener('click', function () {
  scrollYandClose(4100);
});

document.getElementById('portafolio-mobile-btn').addEventListener('click', function () {
  scrollYandClose(5400);
});

document.getElementById('contacto-mobile-btn').addEventListener('click', function () {
  scrollYandClose(document.body.scrollHeight);
});

    
    /* FINAL VERSIÓN MOBILE */  








/* VERSIÓN COMPUTADORA */
document.getElementById('home-btn').addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    document.getElementById('sobre-mi-btn').addEventListener('click', function () {
      window.scrollTo({
        top: 671,
        behavior: 'smooth'
      });
    });

    document.getElementById('educacion-btn').addEventListener('click', function () {
      window.scrollTo({
        top: 1940,
        behavior: 'smooth'
      });
    });

    document.getElementById('experiencia-btn').addEventListener('click', function () {
      window.scrollTo({
        top: 2547,
        behavior: 'smooth'
      });
    });

    document.getElementById('portafolio-btn').addEventListener('click', function () {
      window.scrollTo({
        top: 3627,
        behavior: 'smooth'
      });
    });

    document.getElementById('contacto-btn').addEventListener('click', function () {
      window.scrollTo({
        top: 13570,
        behavior: 'smooth'
      });
    });
    /* FINAL VERSIÓN COMPUTADORA */
