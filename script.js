const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

const sectionColor = {
    'hero':    { bg: 'rgb(199, 152, 25)',               color: '#ffffff' },
    'about':   { bg: 'rgb(199, 152, 25)', color: '#2C1A0E' },
    'menu':    { bg: 'rgb(199, 152, 25)', color: '#2C1A0E' },
    'gallery': { bg: 'rgb(199, 152, 25)', color: '#2C1A0E' },
    'contact': { bg: 'rgb(199, 152, 25)', color: '#2C1A0E' },
};

window.addEventListener('scroll', () => {

    // Scrolled class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Section colors
    let current = 'hero';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    const color = sectionColor[current];
    if (color) {
        navbar.style.background = color.bg;
        document.querySelectorAll('.nav-links a, .logo').forEach(el => {
            el.style.color = color.color;
        });
    }
});