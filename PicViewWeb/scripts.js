document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.layer');

    layers.forEach(layer => {
        layer.addEventListener('click', () => {
            layer.classList.toggle('expanded');
        });
    });
});
