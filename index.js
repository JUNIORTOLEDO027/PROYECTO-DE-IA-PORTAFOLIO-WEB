document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeToggleIcon = document.getElementById('themeToggleIcon');
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const contactForm = document.getElementById('contactForm');
    const successAlert = document.getElementById('successAlert');

    // 1. Lógica de Sincronización y Configuración de Tematización
    function updateThemeElements(theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            themeToggleIcon.className = 'bi bi-sun-fill';
            if (themeMeta) themeMeta.setAttribute('content', '#0f172a');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            themeToggleIcon.className = 'bi bi-moon-fill';
            if (themeMeta) themeMeta.setAttribute('content', '#faf8f5');
        }
    }

    // Inicializar estados con persistencia en LocalStorage
    const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
    updateThemeElements(savedTheme);

    // Evento Escuchador para la Alternancia de Tema (Toggle)
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        localStorage.setItem('portfolioTheme', newTheme);
        updateThemeElements(newTheme);
    });

    // 2. Simulación y Validación del Formulario de Contacto (Accesible)
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Comprobar la validez semántica nativa del formulario
        if (!contactForm.checkValidity()) {
            e.stopPropagation();
            contactForm.classList.add('was-validated');
            return;
        }

        // Simulación exitosa sin recarga de pantalla
        successAlert.classList.remove('d-none');
        successAlert.classList.add('d-flex');
        contactForm.reset();
        contactForm.classList.remove('was-validated');

        // Ocultar la alerta de manera automática
        setTimeout(() => {
            successAlert.classList.remove('d-flex');
            successAlert.classList.add('d-none');
        }, 6000);
    });
});