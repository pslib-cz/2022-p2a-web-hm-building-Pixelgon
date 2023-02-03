const burger = document.querySelectorAll('.navbar__hamburger');
const menu = document.querySelector('.navbar__menu');

burger.forEach (icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle("open");
        menu.classList.toggle('open');
    });
});