const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let current = 0;
let autoSlide;
const interval = 5000;

// === Создаём точки ===
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');

// === Функция показа слайда ===
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
}

// === Следующий слайд ===
function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
}

// === Предыдущий слайд ===
function prevSlide() {
    let prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
}

// === Автоматическая прокрутка ===
function startAuto() {
    autoSlide = setInterval(nextSlide, interval);
}

function stopAuto() {
    clearInterval(autoSlide);
}

// === События ===
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAuto();
    startAuto();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAuto();
    startAuto();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        stopAuto();
        startAuto();
    });
});

// === Старт ===
showSlide(current);
startAuto();