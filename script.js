document.addEventListener("DOMContentLoaded", function() {
    //tajmer za splash screen
    setTimeout(function() {
      // sakrij splash screen
      const splashScreens = document.querySelectorAll('.splash-screen');
      splashScreens.forEach(element => {
        element.style.display = 'none';
      });
  
      // Preusmjeri  na home.html
      window.location.replace('home.html');
    }, 5000); // Vrijeme prikazivanja splash screena 
  });
  
