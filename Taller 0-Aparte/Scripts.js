// Selecciona el botón y el cuerpo del documento
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cambia entre modo claro y oscuro al hacer clic
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cambia el texto del botón según el modo actual
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Oscuro';
    }
});
