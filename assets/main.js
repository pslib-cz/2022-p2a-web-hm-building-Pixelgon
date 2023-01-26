const hamburger = document.querySelector('.navbar__hamburger');
const icons = document.querySelectorAll('.navbar__hamburger-icon');
const menu = document.querySelector('.navbar__menu');

icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
    })
});