const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)


const secciones = document.querySelectorAll('.dino')
const menuItems = document.querySelectorAll('.menu_item')

const functionObserver = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
            itemActual.classList.add('cambiarcolor')
            for (const item of menuItems) {
                if (item != itemActual) { 
                    item.classList.remove('cambiarcolor')
                }
            }
        }
    })
}

const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
})

secciones.forEach(dino => observer.observe(dino))


