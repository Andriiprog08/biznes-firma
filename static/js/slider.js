let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showSlide(index) {
    const slidesContainer = document.querySelector(".slides");
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Автоматическое переключение каждые 5 секунд
setInterval(nextSlide, 5000);