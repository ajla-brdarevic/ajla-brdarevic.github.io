const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
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

