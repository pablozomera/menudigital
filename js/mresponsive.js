const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)