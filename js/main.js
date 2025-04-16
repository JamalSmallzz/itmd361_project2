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
      paragraph: "",
      image: "images/mdkhan.jpg",
      caption: "A Palestinian restaurant specializing in smoked food."
    },
    {
      title: "Bawadi",
      paragraph: "",
      image: "images/baw.jpg",
      caption: "Bedouin-themed restaurant with traditional tents and Mensaf."
    },
    {
      title: "Moti Cafe",
      paragraph: "",
      image: "images/moti.webp",
      caption: "Indian street food. Tikka masala is a favorite."
    },
    {
      title: "Albasha",
      paragraph: "",
      image: "images/albasha.jpeg",
      caption: "Jordanian cuisine with excellent hummus and shawarma."
    },
    {
      title: "Maqluba",
      paragraph: "Upside-down rice dish with chicken, eggplant, and potatoes.",
      video: "images/maql.mp4"
    }
  ];

  const slidesDataHobbies = [
    {
      title: "Old Technology",
      paragraph: "I love fixing old tech. First thing I ever fixed: my dad's walkman.",
      image: "images/thinkpad.webp",
      caption: "IBM ThinkPad T530"
    },
    {
      title: "Modding",
      paragraph: "Modding lets me enhance games and hardware beyond their original limits.",
      image: "images/seaglass.jpg",
      caption: "My favorite ROM"
    },
    {
      title: "One Piece",
      paragraph: "One Piece is full of freedom, revolution, and justice. I love the themes and characters.",
      image: "images/blackbeard.webp",
      caption: "My favorite panel"
    },
    {
      title: "Retro Games",
      paragraph: "I play retro RPGs, platformers, and story-driven games. Favorite: Warioland.",
      image: "images/dragonite.png",
      caption: "My favorite Pokémon"
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
      let html = `<h2>${slide.title}</h2>`;

      if (slide.paragraph) {
        html += `<p>${slide.paragraph}</p>`;
      }

      if (slide.image && slide.caption) {
        html += `<figure><img src="${slide.image}" alt="${slide.title}"><figcaption>${slide.caption}</figcaption></figure>`;
      } else if (slide.image) {
        html += `<img src="${slide.image}" alt="${slide.title}">`;
      }

      if (slide.video) {
        html += `<video controls muted><source src="${slide.video}" type="video/mp4"></video>`;
      }

      slideEl.innerHTML = html;
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
