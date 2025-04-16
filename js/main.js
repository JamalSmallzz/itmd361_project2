document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  if (header) {
    header.addEventListener("mouseover", () => {
      header.textContent = "Hope you're hungry!";
    });
    header.addEventListener("mouseout", () => {
      header.textContent = "Hobbies!";
    });
  }

  const colorBtn = document.getElementById("changeColorBtn");
  if (colorBtn) {
    colorBtn.addEventListener("click", () => {
      document.body.style.backgroundColor = "#f0f8ff";
    });
  }

  const slider = document.getElementById("sliderImg");
  if (slider) {
    const images = [
      "images/dragonite.png",
      "images/thinkpad.webp",
      "images/seaglass.jpg",
      "images/blackbeard.webp"
    ];
    let current = 0;
    setInterval(() => {
      current = (current + 1) % images.length;
      slider.src = images[current];
    }, 3000);
  }

  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  if (slides.length > 0 && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide);
  }
});
