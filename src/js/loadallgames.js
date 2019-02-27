import mixitup from "mixitup/dist/mixitup.min.js";
var containerEl = document.querySelector('[data-ref="container"]');
var controls = document.querySelector('[data-ref="controls"]');
var filters = document.querySelectorAll('[data-ref="filter"]');

const gamesList = [
  {
    id: 1,
    name: "美国篮球协会19",
    href: "https://nba2k19.gamepoch.com",
    coverImg: "../img/portfolios/games/nba2k19.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 2,
    name: "美国篮球协会18",
    href: "https://nba2k18.gamepoch.com",
    coverImg: "../img/portfolios/games/nba2k18.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 3,
    name: "拳皇14",
    href: "https://kof.gamepoch.com",
    coverImg: "../img/portfolios/games/kof14.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 4,
    name: "隐龙传",
    href: "https://ylz.gamepoch.com",
    coverImg: "../img/portfolios/games/hidden_dragon_legend.jpg",
    category: "PS4",
    type: ["hot", "new"]
  },
  {
    id: 5,
    name: "探险家斯皮兰卡",
    href: "https://spelunker.gamepoch.com",
    coverImg: "../img/portfolios/games/spelunker.jpg",
    category: "PS4",
    type: ["hot"]
  },
  {
    id: 6,
    name: "黑暗军团",
    href: "games.html",
    coverImg: "../img/portfolios/games/dark_legion.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 7,
    name: "月蚀：血缘崛起",
    href: "games.html",
    coverImg: "../img/portfolios/games/lunar_stone.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 8,
    name: "牧场星球",
    href: "games.html",
    coverImg: "../img/portfolios/games/ranch_planet.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 9,
    name: "幻象大师-伊涅斯塔",
    href: "games.html",
    coverImg: "../img/portfolios/games/iniesta.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 10,
    name: "光之追迹者",
    href: "games.html",
    coverImg: "../img/portfolios/games/light_tracer.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 11,
    name: "仰冲异界",
    href: "games.html",
    coverImg: "../img/portfolios/games/obduction.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 12,
    name: "梦幻垂钓",
    href: "games.html",
    coverImg: "../img/portfolios/games/dream_angling.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 13,
    name: "音姬",
    href: "games.html",
    coverImg: "../img/portfolios/games/audio_beats.jpg",
    category: "PS(VR)",
    type: ["new"]
  },
  {
    id: 14,
    name: "超级连击王",
    href: "games.html",
    coverImg: "../img/portfolios/games/super_comboman.jpg",
    category: "PS",
    type: ["new"]
  },
  {
    id: 15,
    name: "生生不息",
    href: "games.html",
    coverImg: "../img/portfolios/games/life_goes_on.jpg",
    category: "PS",
    type: []
  },
  {
    id: 16,
    name: "音量",
    href: "games.html",
    coverImg: "../img/portfolios/games/volume.jpg",
    category: "PS",
    type: []
  },
  {
    id: 17,
    name: "四元素大冒险",
    href: "games.html",
    coverImg: "../img/portfolios/games/element4l.jpg",
    category: "PS",
    type: []
  },
  {
    id: 18,
    name: "虚空之虫",
    href: "games.html",
    coverImg: "../img/portfolios/games/nihilumbra.jpg",
    category: "PS",
    type: []
  },
  {
    id: 19,
    name: "永不孤单",
    href: "games.html",
    coverImg: "../img/portfolios/games/never_alone.jpg",
    category: "PS",
    type: []
  }
];

function activateButton(activeButton, siblings) {
  var button;
  var i;
  for (i = 0; i < siblings.length; i++) {
    button = siblings[i];
    button.classList[button === activeButton ? "add" : "remove"]("active");
  }
}

function renderGameItem(item) {
  let classes = "";
  item.type.forEach(element => {
    classes += element + " ";
  });
  return `
   <div class="portfolio ${classes}" data-ref="game">
    <div class="portfolio-wrapper">
      <a href="${item.href}?id=${item.id}" target="_blank" rel="noopener">
        <img class="lazyload" src="img/common/loading.gif" data-src="${
          item.coverImg
        }" alt="${item.name}" />
      </a>
      <div class="label">
        <div class="label-text">
          <a href="${item.href}?id=${
    item.id
  }" target="_blank" class="text-title" rel="noopener">${item.name}</a>
          <span class="text-category">${item.category}</span>
        </div>
        <div class="label-bg"></div>
      </div>
    </div>
  </div>
  `;
}

var mixer = mixitup(containerEl, {
  data: {
    uidKey: "id",
    dirtyCheck: true
  },
  render: {
    target: renderGameItem
  },
  layout: {
    containerClassName: "game-list-container"
  },
  selectors: {
    target: '[data-ref="game"]'
  }
});

// Finally, load the full dataset into the mixer
mixer
  .dataset(gamesList.filter(item => item.type.indexOf("hot") !== -1))
  .then(function(state) {
    // console.log("loaded " + state.activeDataset.length + " items");
    // newsImageLazyLoad.update();
  });

// We can now set up a handler to listen for "click" events on our UI buttons
controls.addEventListener("click", function(e) {
  handleButtonClick(e.target);
});

function handleButtonClick(button) {
  // If button is already active, or an operation is in progress, ignore the click
  if (button.classList.contains("active") || mixer.isMixing()) return;
  // Else, check what type of button it is, if any
  if (button.matches('[data-ref="filter"]')) {
    // Filter button
    activateButton(button, filters);
  } else {
    // Not a button
    return;
  }

  const className = button.getAttribute("data-filter");
  return mixer
    .dataset(
      className === "all"
        ? gamesList
        : gamesList.filter(item => item.type.indexOf(className) !== -1)
    )
    .then(function(state) {
      // console.log("fetched " + state.activeDataset.length + " items");
      // newsImageLazyLoad.update();
    })
    .catch(console.error.bind(console));
}
