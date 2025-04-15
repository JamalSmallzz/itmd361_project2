
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
}