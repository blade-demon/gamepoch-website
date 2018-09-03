import mixitup from "mixitup";

console.log("load games");
const gamesList = [
  {
    id: 1,
    name: "NBA 2K19",
    href: "https://nba2k19.gamepoch.com",
    coverImg: "../img/portfolios/games/nba2k19.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 2,
    name: "NBA 2K18",
    href: "https://nba2k18.gamepoch.com",
    coverImg: "../img/portfolios/games/nba2k18.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 3,
    name: "The King of Fighters XIV",
    href: "https://kof.gamepoch.com",
    coverImg: "../img/portfolios/games/kof14.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 4,
    name: "Hidden Dragon Legend",
    href: "https://ylz.gamepoch.com",
    coverImg: "../img/portfolios/games/hidden_dragon_legend.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 5,
    name: "Spelunker",
    href: "https://spelunker.gamepoch.com",
    coverImg: "../img/portfolios/games/spelunker.jpg",
    category: "PS4",
    type: ["hot"]
  },
  {
    id: 6,
    name: "Dark Legion",
    href: "games.html",
    coverImg: "../img/portfolios/games/dark_legion.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 7,
    name: "Lunar Stone",
    href: "games.html",
    coverImg: "../img/portfolios/games/lunar_stone.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 8,
    name: "Ranch Planet",
    href: "games.html",
    coverImg: "../img/portfolios/games/ranch_planet.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 9,
    name: "The Illusionist-Andres Iniesta",
    href: "games.html",
    coverImg: "../img/portfolios/games/iniesta.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 10,
    name: "Light Tracer",
    href: "games.html",
    coverImg: "../img/portfolios/games/light_tracer.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 11,
    name: "Obduction",
    href: "games.html",
    coverImg: "../img/portfolios/games/obduction.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 12,
    name: "Dream Angling",
    href: "games.html",
    coverImg: "../img/portfolios/games/dream_angling.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 13,
    name: "Audio Beats",
    href: "games.html",
    coverImg: "../img/portfolios/games/audio_beats.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 14,
    name: "Super Comboman",
    href: "games.html",
    coverImg: "../img/portfolios/games/super_comboman.jpg",
    category: "PS",
    type: ["new"]
  },
  {
    id: 15,
    name: "Life Goes On",
    href: "games.html",
    coverImg: "../img/portfolios/games/life_goes_on.jpg",
    category: "PS",
    type: []
  },
  {
    id: 16,
    name: "Volume",
    href: "games.html",
    coverImg: "../img/portfolios/games/volume.jpg",
    category: "PS",
    type: []
  },
  {
    id: 17,
    name: "Element4l",
    href: "games.html",
    coverImg: "../img/portfolios/games/element4l.jpg",
    category: "PS",
    type: []
  },
  {
    id: 18,
    name: "Nihilumbra",
    href: "games.html",
    coverImg: "../img/portfolios/games/nihilumbra.jpg",
    category: "PS",
    type: []
  },
  {
    id: 19,
    name: "Never Alone",
    href: "games.html",
    coverImg: "../img/portfolios/games/never_alone.jpg",
    category: "PS",
    type: []
  }
];

const renderGameItem = item => {
  let classes = "";
  item.type.forEach(element => {
    classes += element + " ";
  });
  return `
   <div class="portfolio ${classes}" data-ref="game">
    <div class="portfolio-wrapper">
      <a href=${item.href} target="_blank" rel="noopener">
        <img class="lazy" data-src=${item.coverImg} alt=${item.name} />
      </a>
      <div class="label">
        <div class="label-text">
          <a href=${
            item.href
          } target="_blank" class="text-title" rel="noopener">${item.name}</a>
          <span class="text-category">${item.category}</span>
        </div>
        <div class="label-bg"></div>
      </div>
    </div>
  </div>
  `;
};
var mixer = mixitup(".game-list-container", {
  data: {
    uidKey: "id",
    dirtyCheck: true
  },
  render: {
    target: renderGameItem
  },
  controls: {
    toggleDefault: "hot"
  },
  selectors: {
    target: '[data-ref="game"]'
  }
});

mixer.dataset(gamesList).then(function(state) {
  console.log(state);
});
