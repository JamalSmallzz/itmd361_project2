document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header h1");
  if (header && document.body.classList.contains("index")) {
    header.addEventListener("mouseover", function () {
      header.textContent = "Hope you're hungry!";
    });
    header.addEventListener("mouseout", function () {
      header.textContent = "Welcome to My Homepage";
    });
  }

  var slideshow = document.getElementById("slideshow");
  if (!slideshow) return;

  var isIndex = document.body.classList.contains("index");
  var data = isIndex ? [
    { title: "Mdakhan", paragraph: "", image: "images/mdkhan.jpg", caption: "A Palestinian restaurant specializing in smoked food." },
    { title: "Bawadi", paragraph: "", image: "images/baw.jpg", caption: "Bedouin-themed restaurant with traditional tents and Mensaf." },
    { title: "Moti Cafe", paragraph: "", image: "images/moti.webp", caption: "Indian street food. Tikka masala is a favorite." },
    { title: "Albasha", paragraph: "", image: "images/albasha.jpeg", caption: "Jordanian cuisine with excellent hummus and shawarma." },
    { title: "Maqluba", paragraph: "Upside-down rice dish with chicken, eggplant, and potatoes.", video: "images/maql.mp4" }
  ] : [
    { title: "Old Technology", paragraph: "I love fixing old tech. First thing I ever fixed: my dad's walkman.", image: "images/thinkpad.webp", caption: "IBM ThinkPad T530" },
    { title: "Modding", paragraph: "Modding lets me enhance games and hardware beyond their original limits.", image: "images/seaglass.jpg", caption: "My favorite ROM" },
    { title: "One Piece", paragraph: "One Piece is full of freedom, revolution, and justice. I love the themes and characters.", image: "images/blackbeard.webp", caption: "My favorite panel" },
    { title: "Retro Games", paragraph: "I play retro RPGs, platformers, and story-driven games. Favorite: Warioland.", image: "images/dragonite.png", caption: "My favorite Pokémon" }
  ];

  var current = 0;
  var slide = document.createElement("div");
  slide.className = "slide";
  slideshow.appendChild(slide);

  var nav = document.createElement("div");
  nav.className = "slider-buttons";
  nav.innerHTML = '<button id="prevBtn">Previous</button><button id="nextBtn">Next</button>';
  slideshow.appendChild(nav);

  function showSlide(i) {
    var s = data[i];
    var html = "<h2>" + s.title + "</h2>";
    if (s.paragraph) html += "<p>" + s.paragraph + "</p>";
    if (s.image) {
      html += '<figure><img src="' + s.image + '" alt="' + s.title + '">';
      if (s.caption) html += "<figcaption>" + s.caption + "</figcaption>";
      html += "</figure>";
    }
    if (s.video) {
      html += '<video controls muted><source src="' + s.video + '" type="video/mp4"></video>';
    }
    slide.innerHTML = html;
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    current = (current - 1 + data.length) % data.length;
    showSlide(current);
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    current = (current + 1) % data.length;
    showSlide(current);
  });

  showSlide(current);
});
