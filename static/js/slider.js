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


const images = document.querySelectorAll('.gallery .gallery_foto');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const btnZoomIn = document.getElementById('zoom-in');
const btnZoomOut = document.getElementById('zoom-out');
const btnClose = document.getElementById('close');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentIndex = 0;
let scale = 1;

function openModal(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
  modal.classList.add('active');
  scale = 1;
  modalImg.style.transform = `scale(${scale})`;
}

function closeModal() {
  modal.classList.remove('active');
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

btnClose.addEventListener('click', closeModal);
btnNext.addEventListener('click', showNext);
btnPrev.addEventListener('click', showPrev);

btnZoomIn.addEventListener('click', () => {
  scale += 0.2;
  modalImg.style.transform = `scale(${scale})`;
});

btnZoomOut.addEventListener('click', () => {
  scale = Math.max(0.5, scale - 0.2);
  modalImg.style.transform = `scale(${scale})`;
});

// Закрытие по клику вне изображения
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Управление с клавиатуры
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'Escape') closeModal();
});

// Масштабирование колесиком мыши
modalImg.addEventListener('wheel', e => {
  e.preventDefault();
  if (e.deltaY < 0) scale += 0.1;
  else scale = Math.max(0.5, scale - 0.1);
  modalImg.style.transform = `scale(${scale})`;
});


const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function(){
  if (document.body.scrollTop > 200 || dokument.documentElement.scrollTop > 200){
    toTopBtn.style.display = "block"
  }
  else{
    toTopBtn.style.display = "none";
  }
};

toTopBtn.addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: "smooth"});
});