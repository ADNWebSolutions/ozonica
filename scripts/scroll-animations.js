// --------------------------------------
// Animaciones de scroll
// --------------------------------------

// Lo único que hay que hacer es agregar la clase al objeto como si fuera un Bootstrap o un TailwindCSS.
// Ejemplo: <h2 class="fade-in from-left">TU VIEJA</h2>
// 
// Los valores de la distancia, la duración de la animación y la opacidad están en el index.css
// Si hace falta que aparezcan de arriba o de abajo, se puede agregar con translateY.

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0, //Porcentaje del objeto que debe estar en pantalla para que la animación se dispare (0 - 1).
    rootMargin: "0px 0px -50px 0px" //La animación se inicia cuando el borde inferior de la pantalla llega a 50px por debajo del threshold.
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});