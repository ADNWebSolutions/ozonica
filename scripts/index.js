/* 
Lógica encargada de "pintar" en el navbar la sección en la que se encuetra actualmente
 */
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header ul li a')

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}