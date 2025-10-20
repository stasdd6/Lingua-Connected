document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    function toggleMenu() {
        const isOpen = navToggle.classList.contains('active');
        
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Блокировка прокрутки body при открытом меню
        if (!isOpen) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    }

    function closeMenu() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Обработчик клика по кнопке меню
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Закрывать меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Закрывать меню при клике вне навигации
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !e.target.closest('.nav-container')) {
            closeMenu();
        }
    });

    // Закрывать меню при изменении ориентации устройства
    window.addEventListener('orientationchange', () => {
        closeMenu();
    });

    // Закрывать меню при ресайзе окна
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        }, 250);
    });
});