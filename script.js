document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const splashScreens = document.querySelectorAll('.splash-screen');
      splashScreens.forEach(element => {
        element.style.display = 'none';
      });
  
      window.location.replace('home.html');
    }, 5000); // Vrijeme prikazivanja splash screena 
  });
  
