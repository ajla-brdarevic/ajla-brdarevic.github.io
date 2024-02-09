const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

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
    nav.classList.remove('light-theme'); 
    nav.classList.add('dark-theme'); 
  } else {
    nav.classList.remove('dark-theme'); 
    nav.classList.add('light-theme'); 
  }
}

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


window.addEventListener('load', () => {
  setThemeBasedOnDevicePreference();
  switchTheme();
  window.addEventListener('scroll', myFunction); 
});

document.addEventListener("click", function (event) {
  if (event.target && event.target.className == "btn") {
    switchTheme();
  }
});





function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

window.onclick = function(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = "none";
  }
}

function showInnerPopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
      popup.style.display = "block";
  }
}

