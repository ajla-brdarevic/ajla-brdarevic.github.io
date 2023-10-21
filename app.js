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

// Funkcija za promjenu teme i obrtanje slika
function switchTheme() {
  const switcher = document.querySelector('.btn');
  switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    toggleImagesVisibility(document.body.className);
    changeNavbarColor(document.body.className);
    // Dodajte ovu liniju za ažuriranje teksta na gumbu
    updateSwitcherText();
  });
}

// Funkcija za ažuriranje teksta na gumbu ovisno o trenutačnoj temi
function updateSwitcherText() {
  const className = document.body.className;
  const switcher = document.querySelector('.btn');
  if (className === 'light-theme') {
    switcher.textContent = 'Theme';
  } else {
    switcher.textContent = 'Theme';
  }
}

// Funkcija za promjenu boje navbara
function changeNavbarColor(theme) {
  const nav = document.querySelector('nav');

  if (theme === 'dark-theme') {
    nav.style.backgroundColor = '#4A4E69'; // Promijenite ovu boju prema vašim željama
  } else {
    nav.style.backgroundColor = '#FEFEDF'; // Vratite boju na Light Mode-u
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

// Postavite tekst na gumbu na temelju trenutačne teme kada se stranica učita
updateSwitcherText();
