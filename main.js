const posters = [
  {
    img: "Posters/0038692eea033e41d0aca3b8d20e2cde.jpg",  // 27x40 inch ratio image
    link: "https://trustanyone321.github.io/The-Equalizer/"
  },
  {
    img: "Posters/19fe292014ca910a14fe46810e00e188.jpg",
    link: "https://trustanyone321.github.io/From-the-World-of-John-Wick-Ballerina/"
  },
  {
    img: "Posters/683b02beb3a70a6aae662e5270ac6ce7.jpg",
    link: "https://trustanyone321.github.io/American-Psycho/"
  },
  {
    img: "Posters/75f35cb5fa0b697fa34993696a8c690f.jpg",
    link: "https://trustanyone321.github.io/Anaconda/"
  },
  {
    img: "Posters/c2765a178ebf095c73faaae02d0e23c1.jpg",
    link: "https://trustanyone321.github.io/Final-Destination-Bloodlines/"
  }
];

// Inject into grid
const grid = document.getElementById("posterGrid");

posters.forEach(p => {
  const card = document.createElement("a");
  card.href = p.link;
  card.classList.add("poster-card");

  card.innerHTML = `<img src="${p.img}" alt="Poster">`;

  grid.appendChild(card);
});