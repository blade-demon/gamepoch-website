console.log("index.js file works at index page");

import mixitup from "mixitup";
import lazyLoad from "vanilla-lazyload";
let newsImageLazyLoad = new lazyLoad({
  elements_selector: ".lazy"
});

/* global AOS */
AOS.init({
  offset: 200,
  easing: "ease-out-back",
  duration: 1500
});

// 新闻详细数据列表
var newsArray = [];

$(document).ready(function() {
  $(document).on("scroll", onScroll);

  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  navMain.on("click", "a:not([data-toggle])", null, function() {
    navMain.collapse("hide");
  });

  $('a[href^="#"]').on("click", function(e) {
    console.log("click");
    e.preventDefault();
    $(document).on("scroll");

    $("a").each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash;
    // menu = target;

    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2
        },
        500,
        "swing",
        function() {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });

  // 初始化tooltip
  $('[data-toggle="tooltip"]').tooltip();
  console.log("dom加载完成，开始获得新闻数据");
  getAllNews();
  console.log("已获得新闻数据");
});

// 鼠标滚动事件
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("nav a").each(function() {
    var currLink = $(this);
    if (currLink.attr("href") === "http://www.gamepoch.cn") {
      return;
    }
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("nav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }

    if (scrollPos > 10) {
      $("#gamepoch-logo").attr("src", "../img/logo2.png");
      $(".menu-top").addClass("menu-shrink");
      $(".navbar-nav").css("background", "#ecf0f1");
    } else {
      $("#gamepoch-logo").attr("src", "../img/logo.png");
      $(".menu-top").removeClass("menu-shrink");
      $(".navbar-nav").css("background", "black");
    }
  });
}

//
// $("ul:eq(0) a").removeClass("active");

// $("ul")
//   .find("li")
//   .eq(1)
//   .find("a")
//   .addClass("active");

const getAllNews = () => {
  $.get(
    "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.com"
  )
    .then(data => {
      // console.log(data);
      // 新闻详细数据列表
      newsArray = data;
      // console.log(response.data);
      // console.log(newsArray);
      // console.log(document.getElementsByClassName("container"));
      // 创建新闻
      insertNewsCover(newsArray);
    })
    .catch(function(error) {
      console.log(error);
    });
};

// 插入新闻元素
const insertNewsCover = newsArray => {
  var htmlString = "";
  // console.log(newsArray.length);
  newsArray.map(function(news, index) {
    // console.log(index);
    if (index < 10) {
      htmlString +=
        '  \n\t\t\t    <div class="col-xs-12 newsSection" data-aos="zoom-in">\n\t\t\t        <div class="col-md-8 col-sm-12">\n\t\t\t            <a href="news.html?id=' +
        news.id +
        '">\n\t\t\t            <h2 style="margin-top: 2%; font-size:2rem; font-weight: normal">' +
        news.post_title +
        '</h2>\n\t\t\t            </a>\n\t\t\t            <p style="margin-top: 5%; font-size:1rem; color: white">' +
        news.post_excerpt +
        '</p>\n\t\t\t            <p style="margin-top: 5%; color: white; font-size: 0.5rem">by ' +
        news.post_source +
        " " +
        news.post_modified +
        '</p>\n\t\t\t            \n\t\t\t        </div>\n\t\t\t        <div class="col-md-4 col-sm-12">\n\t\t\t            <img class="img-responsive lazy" alt="新闻图片" data-src="https://newseditor.gamepoch.com/thinkcmf/data/upload/' +
        JSON.parse(news.smeta).thumb +
        '">\n\t\t\t        </div>\n\t\t\t        </div>\n\t\t\t    ';
    }
  });

  $("#news-container").html(htmlString);
  newsImageLazyLoad.update();
};

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
      <a href="${item.href}?id=${item.id}" target="_blank" rel="noopener">
        <img class="lazy" src="img/common/loading.gif" data-src="${
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
};

var containerEl = document.querySelector('[data-ref="container"]');
var controls = document.querySelector('[data-ref="controls"]');
var filters = document.querySelectorAll('[data-ref="filter"]');

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
    console.log("loaded " + state.activeDataset.length + " items");
    newsImageLazyLoad.update();
  });

// We can now set up a handler to listen for "click" events on our UI buttons
controls.addEventListener("click", function(e) {
  handleButtonClick(e.target);
});

function activateButton(activeButton, siblings) {
  var button;
  var i;
  for (i = 0; i < siblings.length; i++) {
    button = siblings[i];
    button.classList[button === activeButton ? "add" : "remove"]("active");
  }
}

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
      console.log("fetched " + state.activeDataset.length + " items");
      newsImageLazyLoad.update();
    })
    .catch(console.error.bind(console));
}
