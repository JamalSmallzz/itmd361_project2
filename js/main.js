document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  if (header && document.body.classList.contains("index")) {
    header.addEventListener("mouseover", () => {
      header.textContent = "Hope you're hungry!";
    });
    header.addEventListener("mouseout", () => {
      header.textContent = "Welcome to My Homepage";
    });
  }

  const slidesDataIndex = [
    {
      title: "Mdakhan",
      content: `<img src="images/mdkhan.jpg" alt="Mdakhan">
                <figcaption>A Palestinian restaurant specializing in smoked food.</figcaption>`
    },
    {
      title: "Bawadi",
      content: `<img src="images/baw.jpg" alt="Bawadi">
                <figcaption>Bedouin-themed restaurant with traditional tents and Mensaf.</figcaption>`
    },
    {
      title: "Moti Cafe",
      content: `<img src="images/moti.webp" alt="Moti Cafe">
                <figcaption>Indian street food. Tikka masala is a favorite.</figcaption>`
    },
    {
      title: "Albasha",
      content: `<img src="images/albasha.jpeg" alt="AlBasha">
                <figcaption>Jordanian cuisine with excellent hummus and shawarma.</figcaption>`
    },
    {
      title: "Maqluba",
      content: `<p>Upside-down rice dish with chicken, eggplant, and potatoes.</p>
                <video controls muted>
                  <source src="images/maql.mp4" type="video/mp4">
                </video>`
    }
  ];

  const slidesDataHobbies = [
    {
      title: "Old Technology",
      content: `<p>I love fixing old tech. First thing I ever fixed: my dad's walkman.</p>
                <img src="images/thinkpad.webp" alt="IBM ThinkPad">
                <figcaption>IBM ThinkPad T530</figcaption>`
    },
    {
      title: "Modding",
      content: `<p>Modding lets me enhance games and hardware beyond their original limits.</p>
                <img src="images/seaglass.jpg" alt="ROM">
                <figcaption>My favorite ROM</figcaption>`
    },
    {
      title: "One Piece",
      content: `<p>One Piece is full of freedom, revolution, and justice. I love the themes and characters.</p>
                <img src="images/blackbeard.webp" alt="One Piece">
                <figcaption>My favorite panel</figcaption>`
    },
    {
      title: "Retro Games",
      content: `<p>I play retro RPGs, platformers, and story-driven games. Favorite: Warioland.</p>
                <img src="images/dragonite.png" alt="Dragonite">
                <figcaption>My favorite Pokémon</figcaption>`
    }
  ];

  const container = document.getElementById("slideshow");
  if (container) {
    const isIndex = document.body.classList.contains("index");
    const slidesData = isIndex ? slidesDataIndex : slidesDataHobbies;

    const slideEl = document.createElement("div");
    slideEl.className = "slide";
    const buttons = document.createElement("div");
    buttons.className = "slider-buttons";
    buttons.innerHTML = `
      <button id="prevBtn">Previous</button>
      <button id="nextBtn">Next</button>
    `;

    container.appendChild(slideEl);
    container.appendChild(buttons);

    let currentSlide = 0;
    function showSlide(index) {
      const slide = slidesData[index];
      slideEl.innerHTML = `<h2>${slide.title}</h2><div>${slide.content}</div>`;
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
      showSlide(currentSlide);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slidesData.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide);
  }
});
