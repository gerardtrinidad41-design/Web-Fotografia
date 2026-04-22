// Inicializar la librería de animaciones al bajar (AOS)
AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: false,    // Si quieres que se repita la animación al subir y bajar
});

// Cambio de color de la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.9)';
    } else {
        nav.style.background = 'transparent';
    }
});
// Movimiento del Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Agrandar cursor al pasar por botones
document.querySelectorAll('button, a, .cat-card').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
    link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// Contador Animado
const counters = document.querySelectorAll('.counter');
const speed = 200; 

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Activar contador solo cuando el usuario llegue a esa sección
let observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
        observer.disconnect(); // Solo se ejecuta una vez
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('#stats-section'));
const cursorDot = document.querySelector('.cursor-dot');
const cursorOuter = document.querySelector('.cursor-outer');

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // El punto central sigue al ratón al instante
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // El círculo exterior sigue al ratón (el CSS transition hará el resto)
    cursorOuter.style.left = `${posX}px`;
    cursorOuter.style.top = `${posY}px`;
});

// Detectar elementos interactivos para animar el cursor
const links = document.querySelectorAll('a, button, .cat-card, .view-btn');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-active');
    });
    link.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active');
    });
});

// ----------------- Navegador de arriba --------------------
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    
    if (window.scrollY > 80) {
        // Al bajar: se vuelve más oscura y compacta
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
        nav.style.width = '95%';
        nav.style.top = '10px';
        nav.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    } else {
        // Al volver arriba: vuelve a ser cristal flotante
        nav.style.background = 'rgba(255, 255, 255, 0.03)';
        nav.style.width = '90%';
        nav.style.top = '25px';
        nav.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
});

// Efecto de movimiento sutil en el título con el ratón
const title = document.querySelector('.hero-title');

document.addEventListener('mousemove', (e) => {
    if(title) {
        let x = (window.innerWidth / 2 - e.pageX) / 50;
        let y = (window.innerHeight / 2 - e.pageY) / 50;
        title.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});