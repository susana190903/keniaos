// Este es un ejemplo de cómo agregar una animación a los premios

document.addEventListener('DOMContentLoaded', () => {
    const premios = document.querySelectorAll('.premio-item');
    premios.forEach((premio, index) => {
        setTimeout(() => {
            premio.classList.add('mostrar-premio');
        }, index * 200); // Para que cada premio aparezca con un pequeño retraso
    });
});
