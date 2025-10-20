document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Закрывать меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Закрывать меню при клике вне навигации
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});