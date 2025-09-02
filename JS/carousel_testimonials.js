const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
const indicatorsContainer = document.querySelector('.indicators');
let currentIndex = 0;
let interval;
let slidesPerView = getSlidesPerView(); // 👈 detecta cuántos mostrar

function getSlidesPerView() {
    if (window.innerWidth <= 768) return 1; // móvil
    if (window.innerWidth <= 1024) return 2; // tablet
    return 3; // escritorio
}

function createIndicators() {
    indicatorsContainer.innerHTML = ""; // limpiar
    const totalPages = Math.ceil(slides.length / slidesPerView);

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(dot);
    }
}

function updateIndicators() {
    document.querySelectorAll('.indicator').forEach(dot => dot.classList.remove('active'));
    document.querySelector(`.indicator[data-index="${currentIndex}"]`).classList.add('active');
}

function goToSlide(index) {
    currentIndex = index;
    const offset = 100 * index;
    carousel.style.transform = `translateX(-${offset}%)`;
    updateIndicators();
    restartAutoSlide();
}

function nextSlide() {
    const totalPages = Math.ceil(slides.length / slidesPerView);
    currentIndex = (currentIndex + 1) % totalPages;
    goToSlide(currentIndex);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 10000);
}

function restartAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

// Recalcular cuando cambia el tamaño de pantalla
window.addEventListener("resize", () => {
    slidesPerView = getSlidesPerView();
    createIndicators();
    goToSlide(0);
});

// Inicialización
createIndicators();
startAutoSlide();
