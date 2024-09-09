// Sélectionne l'image du menu
const menuImage = document.getElementById('menu');

// Sélectionne les éléments .nav_button
const navButtons = document.querySelectorAll('.nav_button');

// Crée un élément div pour contenir le menu déroulant
const menuDropdown = document.createElement('div');
menuDropdown.classList.add('menu-dropdown');

// Ajoute les éléments .nav_button au menu déroulant
navButtons.forEach(button => {
  const buttonClone = button.cloneNode(true);
  menuDropdown.appendChild(buttonClone);
});

// Ajoute le menu déroulant à la page
document.body.appendChild(menuDropdown);

// Cache le menu déroulant par défaut
menuDropdown.classList.add('hide');

// Ajoute un événement de clic sur l'image du menu
menuImage.addEventListener('click', () => {
  // Affiche ou cache le menu déroulant en fonction de son état actuel
  if (menuDropdown.classList.contains('hide')) {
    menuDropdown.classList.remove('hide');
    menuDropdown.classList.add('show');
  } else {
    menuDropdown.classList.remove('show');
    menuDropdown.classList.add('hide');
  }
});