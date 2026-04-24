// 1. INICIALIZAR ANIMACIONES (AOS)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000, 
        once: false
    });
}

// 2. NAVEGADOR FLOTANTE (Efecto cristal al bajar)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    
    if (nav) {
        if (window.scrollY > 80) {
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
            nav.style.width = '95%';
            nav.style.top = '10px';
            nav.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            nav.style.background = 'transparent';
            nav.style.width = '90%';
            nav.style.top = '25px';
            nav.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    }
});

// 3. CURSOR PERSONALIZADO (Fluido)
const cursorDot = document.querySelector('.cursor-dot');
const cursorOuter = document.querySelector('.cursor-outer');

if (cursorDot && cursorOuter) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // El punto interior sigue al ratón al instante
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // El círculo exterior le sigue con una animación suavizada
        cursorOuter.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 150, fill: "forwards" });
    });

    // Efecto visual al pasar por botones, enlaces y pilares
    const interactives = document.querySelectorAll('a, button, .cat-card, .highlight-item');
    
    interactives.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOuter.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        element.addEventListener('mouseleave', () => {
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOuter.style.backgroundColor = 'transparent';
        });
    });
}

// 4. EFECTO PARALLAX EN EL TÍTULO
const title = document.querySelector('.hero-title');

if (title) {
    document.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 50;
        let y = (window.innerHeight / 2 - e.pageY) / 50;
        title.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}