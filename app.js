const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Funkcija za postavljanje teme na temelju postavki uređaja
function setThemeBasedOnDevicePreference() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
    toggleImagesVisibility('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    toggleImagesVisibility('light-theme');
  }
}

function switchTheme() {
  const switcher = document.querySelector('.btn');
  const body = document.body;

  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }

  toggleImagesVisibility(body.className);
  changeNavbarColor(body.className);
}


function changeNavbarColor(theme) {
  const nav = document.querySelector('nav');

  if (theme === 'dark-theme') {
    nav.classList.remove('light-theme'); // Uklonite light-theme klasu
    nav.classList.add('dark-theme'); // Dodajte dark-theme klasu
  } else {
    nav.classList.remove('dark-theme'); // Uklonite dark-theme klasu
    nav.classList.add('light-theme'); // Dodajte light-theme klasu
  }
}

// Funkcija za prebacivanje vidljivosti slika na temelju teme
function toggleImagesVisibility(theme) {
  const lightImages = document.querySelectorAll('.light-image');
  const darkImages = document.querySelectorAll('.dark-image');

  if (theme === 'dark-theme') {
    lightImages.forEach(img => (img.style.display = 'none'));
    darkImages.forEach(img => (img.style.display = 'block'));
  } else {
    lightImages.forEach(img => (img.style.display = 'block'));
    darkImages.forEach(img => (img.style.display = 'none'));
  }
}


// Postavljanje teme na temelju postavki uređaja kada se stranica učita
window.addEventListener('load', () => {
  setThemeBasedOnDevicePreference();
  switchTheme();
  window.addEventListener('scroll', myFunction); // Dodajte ovu liniju ako želite zadržati ovu funkcionalnost
});

// Dodajte ovaj dio koda za dodavanje "click" eventa za dinamički generirane elemente
document.addEventListener("click", function (event) {
  if (event.target && event.target.className == "btn") {
    switchTheme();
  }
});

