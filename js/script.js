// Select the hamburger menu and the navbar
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

// Add a click event to toggle the 'active' class
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
