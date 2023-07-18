/* 
Lógica encargada de "pintar" en el navbar la sección en la que se encuetra actualmente
 */
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header ul li a')

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 120;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('#logo').classList.remove('active')
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active')
            })
        } else if (top < 600) {
            document.querySelector('#logo').classList.add('active')
        }
    })
}

/* 
Botón hamburguesa y menú dropdown
*/
const burgerBtn = document.getElementById('burger')
const navBar = document.querySelector('#navbar>ul')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open')
    navBar.classList.toggle('dropdown')
})

/* 
Opacity en botón toTop
*/
window.addEventListener("scroll", function () {
    let toTop = document.getElementById("toTop");
    toTop.classList.toggle("visible", window.scrollY > 0);
});