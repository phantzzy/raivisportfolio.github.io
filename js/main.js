const toggle = document.getElementById("darkModeToggle");
const currentMode = localStorage.getItem("theme");

if (currentMode === "light") {
  document.body.classList.add("light-mode");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", theme);
});

// === Carousel Functionality ===
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");
let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const visibleSlides = 3;
  track.style.transform = `translateX(-${currentSlide * (slideWidth + 20)}px)`;
}

nextButton.addEventListener("click", () => {
  const maxSlide = Math.max(0, slides.length - 3);
  currentSlide = (currentSlide + 1 > maxSlide) ? 0 : currentSlide + 1;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  const maxSlide = Math.max(0, slides.length - 3);
  currentSlide = (currentSlide - 1 < 0) ? maxSlide : currentSlide - 1;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

// Initialize
updateCarousel();
