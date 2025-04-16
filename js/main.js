
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    if (header) {
      header.addEventListener("mouseover", () => {
        header.textContent = "Hope you're hungry!";
      });
      header.addEventListener("mouseout", () => {
        header.textContent = "Welcome to My Homepage";
      });
    }
    const colorBtn = document.getElementById("changeColorBtn");
    if (colorBtn) {
      colorBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "#f0f8ff";
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
  });
  