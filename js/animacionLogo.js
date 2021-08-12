let widthPantalla = document.documentElement.clientWidth;
// gsap.from('.primera-seccion', {opacity:0, duration: 1});
let secuencia1 = gsap.timeline({});

secuencia1.from('.logoPrincipal', { opacity:0, duration: 1.5});
secuencia1.from('.primera-seccion', { opacity:0, duration: 1});
// secuencia1.to('.logoPrincipal', { y:-200, duration: 1});

if (widthPantalla>768) {
}
if (widthPantalla<768) {

}