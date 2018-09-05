// console.log("games page load this file");
// document.title = "Game";

const gamesList = [
  {
    id: 6,
    name: "Dark Legion",
    headerImg: "../img/games/dark-legion/coverImg.jpg",
    desc: [
      "Dark Legion is an FPS VR game. You play as a commander on a space mission. During the mission, a space accident happened and you had to land on a mysterious planet. In order to launch again, you started a search of energy blocks scattered across this planet. During the expedition, you found out that, someone on this planet was secretly developing biochemical magicians. In order to protect the human race and the Earth, you have to stop this. Pick up some weapons, let’s wipe out the Dark Legion!"
    ],
    video: "../img/media/dark-legion.mp4",
    videoPoster: "../img/games/dark-legion/thumbnail.jpg",
    thumbnailImg: "../img/games/dark-legion/thumbnail.jpg",
    developer: "Ice World",
    copyRight: "© Ice World Ltd. All Rights Reserved",
    galleryImgs: [
      "../img/games/dark-legion/gallery1.png",
      "../img/games/dark-legion/gallery2.png",
      "../img/games/dark-legion/gallery3.png",
      "../img/games/dark-legion/gallery4.png"
    ],
    platform: "PS(VR)"
  },
  {
    id: 7,
    name: "Lunar Stone",
    headerImg: "../img/games/lunar-stone/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "Lunar Stone is first-person shooter plus role play exclusively designed for virtual reality. There are four levels of combats for you to explore and an unique dodging system empowers your combat against monsters and lords specialized by dark force. The magical stones lead your adventure in magnificent scenes to find the answers along with your beloved companions. Feast your ears with film made original music and boil your blood in a world where mystery creatures and mankind industry collide. It is a combat for survive, it is a journey for young to grow and seek the answers through and it is a also wholly new experience to adventure together with enhanced AI Non-Player-Controlled Character."
    ],
    video: "../img/media/lunar-stone.mp4",
    videoPoster: "../img/games/lunar-stone/thumbnail.jpg",
    thumbnailImg: "../img/games/lunar-stone/thumbnail.jpg",
    developer: "Developer：GQJoy",
    copyRight: "©2017 GQJoy Co.,Ltd All right reserved.",
    galleryImgs: [
      "../img/games/lunar-stone/gallery1.jpg",
      "../img/games/lunar-stone/gallery2.jpg",
      "../img/games/lunar-stone/gallery3.jpg"
    ]
  },
  {
    id: 8,
    name: "Ranch Planet",
    headerImg: "../img/games/ranch-planet/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "Ranch Planet is a VR wrestling game and continuous struggle of strength is the main gameplay of it. Players should shoot the net to capture the animals and use the controllers to pull the animals back.",
      "Four modes are included in this game: Smartwar mode, Cooperation mode, Confrontation mode and Challenge mode."
    ],
    video: "../img/media/ranch-planet.mp4",
    videoPoster: "../img/games/ranch-planet/thumbnail.jpg",
    thumbnailImg: "../img/games/ranch-planet/thumbnail.jpg",
    developer: "AOGA",
    copyRight: "©AOGA TECH ALL RIGHTS RESERVED",
    galleryImgs: [
      "../img/games/ranch-planet/gallery1.jpg",
      "../img/games/ranch-planet/gallery2.jpg",
      "../img/games/ranch-planet/gallery3.jpg",
      "../img/games/ranch-planet/gallery4.jpg"
    ]
  },
  {
    id: 9,
    name: "The Illusionist-Andres Iniesta",
    headerImg: "../img/games/iniesta/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      'This is the first coalescence of VR technology and the football kingdom."The Illusionist - Andres Iniesta" is the first VR football documentary in the world developed by "Desports". Three months of following Andres Iniesta -The captain of F.C. Barcelona.Analyzing his super skills closely.Sharing the life experience of this football legend.All fo these are in the "The Illusionist - Andres Iniesta" VR documentary.'
    ],
    video: "../img/media/iniesta.mp4",
    videoPoster: "../img/games/iniesta/thumbnail.jpg",
    thumbnailImg: "../img/games/iniesta/thumbnail.jpg",
    developer: "双刃剑体育",
    copyRight:
      "©2017 Desports, Inc. All right reserved. ©2017 thatVRcompany, Inc. All right reserved. ©Gamepoch, Inc. All right reserved.",
    galleryImgs: [
      "../img/games/iniesta/gallery1.jpg",
      "../img/games/iniesta/gallery2.jpg",
      "../img/games/iniesta/gallery3.jpg",
      "../img/games/iniesta/gallery4.jpg"
    ]
  },
  {
    id: 10,
    name: "Light Tracer",
    headerImg: "../img/games/light-tracer/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "Light Tracer is a VR Platform-Puzzler in which the Player is a godlike creature who has to guide a princess in despair up the enormous Tower of Bellbatis. FEATURES:",
      "-A new genre for a new device, a novel and creative take on the popular genre which opens up a new gaming experience that’s clear from the moment the player takes up the PS VR®. ",
      "-8 different chapters, 8 different worlds: from Gravity World to Mechanica World, from sliding the princess down icy steps to the final Angelic City.",
      "-From classic platforming to enigmatic puzzles and boss fights that test both your reaction speed as well as your thinking speed. ",
      "-Use the Move® controller to ‘grab’ the world and freely move around. Sometimes the solution to a dangerous enemy or an enigmatic puzzle is simply changing your view!",
      "-Of Towers and Mysteries: A princess with a mission, the mysterious god-like player and a story with a twist!"
    ],
    video: "../img/media/light-tracer.mp4",
    videoPoster: "../img/games/light-tracer/thumbnail.jpg",
    thumbnailImg: "../img/games/light-tracer/thumbnail.jpg",
    developer: "Void Dimensions",
    copyRight: "© 2017 Void Dimensions. All Rights Reserved.",
    galleryImgs: [
      "../img/games/light-tracer/gallery1.png",
      "../img/games/light-tracer/gallery2.png",
      "../img/games/light-tracer/gallery3.png"
    ]
  },
  {
    id: 11,
    name: "Obduction",
    headerImg: "../img/games/obduction/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "From Cyan, the indie studio that brought you Myst, comes a new sci-fi adventure.",
      "As you walk beside the lake on a cloudy night, a curious, organic artifact falls from the starry sky and inexplicably, without asking permission, transports you across the universe. You’ve been abducted from your cozy existence and added into an alien landscape with pieces of Earth from unexpected times and places.",
      "The strange worlds of Obduction reveal their secrets only as you explore, discover, coax, and consider their clues. As you bask in the otherworldly beauty and explore the enigmatic landscapes, remember that the choices you make will have substantial consequences. This is your story now."
    ],
    video: "../img/media/obduction.mp4",
    videoPoster: "../img/games/obduction/thumbnail.jpg",
    thumbnailImg: "../img/games/obduction/thumbnail.jpg",
    developer: "Void Dimensions",
    copyRight:
      "® Copyright 2017 Cyan, Inc . All rights reserved. Obduction ® and Cyan are registered trademarks of Cyan, Inc. Legendary VR logo © 2017 Legendary. Unreal, Unreal Engine, the circle-U logo and the Powered By Unreal Engine Logo are trademarks or registered trademarks of Epic Games, Inc. in the United States and elsewhere.",
    galleryImgs: [
      "../img/games/obduction/gallery1.jpg",
      "../img/games/obduction/gallery2.jpg",
      "../img/games/obduction/gallery3.jpg",
      "../img/games/obduction/gallery4.jpg"
    ]
  },
  {
    id: 12,
    name: "Dream Angling",
    headerImg: "../img/games/dream-angling/coverImg.jpg",
    platform: "PS4",
    desc: [
      "This is a story about looking for memories in the dream.",
      "Player as the main character in game, by complete a series of angling challenge, try to find all the important memory pieces throughout the growth process and experience the inner feeling of the main character.",
      "The gameplay is simulating the core experiences of angling by a more casual way: find the target – casting rod – spinning the reel – catch the fish.",
      "Game presents 36 kinds of fishes and 4 different beautiful and stylish scenes. Also game provides two modes: Story Mode and Challenge Mode"
    ],
    video: "../img/media/dream-angling.mp4",
    videoPoster: "../img/games/dream-angling/thumbnail.jpg",
    thumbnailImg: "../img/games/dream-angling/thumbnail.jpg",
    developer: "成都黑羚",
    copyRight: "© 2017 BLUCK.Co.,Ltd All rights reserved",
    galleryImgs: [
      "../img/games/dream-angling/gallery1.png",
      "../img/games/dream-angling/gallery2.png",
      "../img/games/dream-angling/gallery3.png"
    ]
  },
  {
    id: 13,
    name: "Audio Beats",
    headerImg: "../img/games/audio-beats/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "Audio Beats is a music rhythm game.To allow players to better judge and hit the flying notes, we make sure that the hit determination point and note hitting panels are friendly for all players.",
      "In order for players to experience different ways of note hitting, we use a sophisticated collision algorithm and nested logic to analyze the player's actions."
    ],
    video: "../img/media/audio-beats.mp4",
    videoPoster: "../img/games/audio-beats/thumbnail.jpg",
    thumbnailImg: "../img/games/audio-beats/thumbnail.jpg",
    developer: "FAMIKU举佳爽",
    copyRight: "© 2017 Famiku All rights reserved.",
    galleryImgs: [
      "../img/games/audio-beats/gallery1.png",
      "../img/games/audio-beats/gallery2.jpg",
      "../img/games/audio-beats/gallery3.jpg",
      "../img/games/audio-beats/gallery4.jpg"
    ]
  },
  {
    id: 14,
    name: "Super Comboman",
    headerImg: "../img/games/super-comboman/coverImg.jpg",
    platform: "PS4",
    desc: [
      "Crispy Combo Action Enter a new Action Hero. An energetic islander with funked up mullet nugget, wearer of loud Hawaiian shirts, eater of chocolate chip cookies, and owner of a talking fanny pack (yeah, a talking fanny pack). His name is Struggles, and he’s the working class hero with an 'All You Can' attitude, a spinning pile driver, and fireball moves to match.",
      "Help Struggles battle an army of baddies and Mega bosses from a giant construction organization called DoDoCo. Traverse through vibrant levels, unlock powerful moves ripped straight from the pages of classic 2D fighter games' move lists and punch your co-workers through brick walls in order to collect a paycheck along the way. Help Struggles keep a roof over his and his brother's head in this action packed 2D adventure."
    ],
    video: "../img/media/super-comboman.mp4",
    videoPoster: "../img/games/super-comboman/thumbnail.jpg",
    thumbnailImg: "../img/games/super-comboman/thumbnail.jpg",
    developer: "Interabang Entertainment",
    copyRight: "© 2015 INTERABANG ENTERTAINMENT INC All Rights Reserved",
    galleryImgs: [
      "../img/games/super-comboman/gallery1.jpg",
      "../img/games/super-comboman/gallery2.jpg",
      "../img/games/super-comboman/gallery3.jpg",
      "../img/games/super-comboman/gallery4.jpg"
    ]
  },
  {
    id: 15,
    name: "Life Goes On",
    headerImg: "../img/games/life-goes-on/coverImg.jpg",
    platform: "PS4",
    desc: [
      "Life Goes On: Done to Death is a comically-morbid platformer where you guide heroic knights to their demise and use the dead bodies to solve puzzles. Wanting to live forever, a mighty king sends his army of knights to find the Cup of Life. On this quest, you will summon knight after knight to be brutally sacrificed. As you journey through treacherous and trap-ridden worlds, you’ll show no mercy to solve each challenging puzzle."
    ],
    video: "../img/media/life-goes-on.mp4",
    videoPoster: "../img/games/life-goes-on/thumbnail.jpg",
    thumbnailImg: "../img/games/life-goes-on/thumbnail.jpg",
    developer: "Infinite Monkeys",
    copyRight: "© Infinite Monkeys Entertainment, Ltd. 2016",
    galleryImgs: [
      "../img/games/life-goes-on/gallery1.jpg",
      "../img/games/life-goes-on/gallery2.jpg",
      "../img/games/life-goes-on/gallery3.jpg",
      "../img/games/life-goes-on/gallery4.jpg"
    ]
  },
  {
    id: 16,
    name: "Volume",
    headerImg: "../img/games/volume/coverImg.jpg",
    platform: "PS4 PSV PSVR",
    desc: [
      "Locksley doesn't kill. That would be far too easy. Instead, he commits his crimes through stealth. Sneaking, distracting, avoiding. He is never seen, and seldom heard. As he grows in popularity and notoriety, so will his inventory. An arsenal of gadgets await discovery in a quest to rob from the rich and give to the unheard.",
      "A hundred challenging and exciting levels lie ahead, but that is only the beginning of the Volume. The community are free to build their own challenges, even releasing their own takes on the core levels. Volume will evolve, warp and grow as players make their mark on Locksley's legend.",
      "Volume is a near-future retelling of the Robin Hood legend, starring Danny Wallace (Thomas Was Alone), Charlie McDonnell and award-winning, critically-acclaimed actor Andy Serkis (The Lord of the Rings, Planet of the Apes) as Gisborne.",
      "This is a small, independent games, continuously playing along with the DLC 4 hours to clear customs there. It has historical significance in science and education of the game is mainly about a real-life in the special environment of an ancient race, is how to survive in the harsh to its complex nature of a story contains the author Chong feelings of love, fear of this ancient race. Also conveys an idea, regardless of how much is in the tough environment, as long as there is a loving reverence for nature as well as a positive and optimistic hope for the future of the heart, we will be able to find their own piece of heaven and Earth."
    ],
    video: "../img/media/volume.mp4",
    videoPoster: "../img/games/volume/thumbnail.jpg",
    thumbnailImg: "../img/games/volume/thumbnail.jpg",
    developer: "Bithell Games",
    copyRight: "",
    galleryImgs: [
      "../img/games/volume/gallery1.jpg",
      "../img/games/volume/gallery2.jpg",
      "../img/games/volume/gallery3.jpg",
      "../img/games/volume/gallery4.jpg"
    ]
  },
  {
    id: 17,
    name: "Element4l",
    headerImg: "../img/games/element4l/coverImg.jpg",
    platform: "PS4",
    desc: [
      "Element4l is a leisure and adventure game, with gamers controlling a unique element through different levels in the dreamy world. This unique element is able to become the air floating through the sky, while the spine is its enemy; also can become ice, but volcano is its nightmare; even can be the rock or flame. All in all, gamers need to change among the 4 kinds of shapes according to the specific conditions, and choose different shapes to get through different levels based on different terrain trap. It should be noted that the 4 elements move forward by inertia instead of automatism."
    ],
    video: "../img/media/element4l.mp4",
    videoPoster: "../img/games/element4l/thumbnail.jpg",
    thumbnailImg: "../img/games/element4l/thumbnail.jpg",
    developer: "I-Illusions",
    copyRight: "© I-Illusions All rights reserved",
    galleryImgs: [
      "../img/games/element4l/gallery1.png",
      "../img/games/element4l/gallery2.png",
      "../img/games/element4l/gallery3.png"
    ]
  },
  {
    id: 18,
    name: "Nihilumbra",
    headerImg: "../img/games/nihilumbra/coverImg.jpg",
    platform: "PS4",
    desc: [
      "Discover the beautiful world of Nihilumbra and join Born on his adventure to find himself whilst trying to escape from his inevitable curse. ",
      "Born was created from the absolute nothingness: The Void. But somehow he separates himself from the black emptiness and appears in the world. This is where his long odyssey begins, in which he will learn how to use the colors around him to gain powerful abilities and transform the world.",
      "However, his experiences come at a high price. The Void must be one. It seeks to reclaim him and will never stop chasing him, destroying everything in its path along the way. To survive, Born will have to condemn the earth he walks to its inevitable obliteration by The Void..."
    ],
    video: "../img/media/nihilumbra.mp4",
    videoPoster: "../img/games/nihilumbra/thumbnail.jpg",
    thumbnailImg: "../img/games/nihilumbra/thumbnail.jpg",
    developer: "Beutifun Games",
    copyRight: "© Beautifun Games All rights reserved",
    galleryImgs: [
      "../img/games/nihilumbra/gallery1.jpg",
      "../img/games/nihilumbra/gallery2.jpg",
      "../img/games/nihilumbra/gallery3.jpg",
      "../img/games/nihilumbra/gallery4.jpg"
    ]
  },
  {
    id: 19,
    name: "Never Alone",
    headerImg: "../img/games/never-alone/coverImg.jpg",
    platform: "PS4",
    desc: [
      "Never Alone (Kisima Ingitchuna) is the first game developed in collaboration with the Iñupiat, an Alaska Native people. Nearly 40 Alaska Native elders, storytellers and community members contributed to the development of the game. Play as a young Iñupiat girl and an arctic fox as they set out to find the source of the eternal blizzard which threatens the survival of everything they have ever known.",
      "Guide both characters in single-player mode or play cooperatively with a friend or family member as you trek through frozen tundra, leap across treacherous ice floes, swim through underwater ice caverns, and face numerous enemies both strange and familiar in the journey to save the girl’s village."
    ],
    video: "../img/media/never-alone.mp4",
    videoPoster: "../img/games/never-alone/thumbnail.jpg",
    thumbnailImg: "../img/games/never-alone/thumbnail.jpg",
    developer: "E-Line Media",
    copyRight: "",
    galleryImgs: [
      "../img/games/never-alone/gallery1.jpg",
      "../img/games/never-alone/gallery2.jpg"
    ]
  }
];

const $titleName = $("#title-game-name");
const $name = $("#game-name");
const $coverImg = $("#cover-image");
const $thumbnail = $("#thumbnail");
const $platform = $("#platform");
const $descContainer = $("#desc-container");
const $video = $("#video");
const $developer = $("#developer");
const $copyRight = $("#copy-right");
const $galleryContainer = $("#gallery-container");

// console.log($name);
// console.log($coverImg);
// console.log($platform);
// console.log($descContainer);
// console.log($video);
// console.log($developer);
// console.log($galleryContainer);

$(function() {
  var params = getJsonFromUrl();
  var gameId = params.id;
  console.log(gameId);

  if (gameId !== undefined) {
    const gameInfo = gamesList.filter(game => String(game.id) === gameId);
    console.log(gameInfo);
    document.title = gameInfo[0].name;
    $coverImg.attr("src", gameInfo[0].headerImg);
    $titleName.text(gameInfo[0].name);

    $descContainer.html(gameInfo[0].desc.map(item => `<p>${item}</p>`));
    $video.attr("poster", gameInfo[0].videoPoster);
    $video.attr("src", gameInfo[0].video);
    $thumbnail.attr("src", gameInfo[0].thumbnailImg);
    $developer.text("Developer: " + gameInfo[0].developer);
    $name.text("Game name: " + gameInfo[0].name);
    $platform.text("Platform: " + gameInfo[0].platform);
    $copyRight.text(gameInfo[0].copyRight);
    $galleryContainer.html(
      gameInfo[0].galleryImgs.map(
        img =>
          `<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <a href="${img}" class="thumbnail">
          <img class="gallery-image" src="${img}" alt="image gallery">
        </a>
      </div>`
      )
    );
  } else {
    console.log("没有gameid，跳转到404页面");
  }
});

$(document).on("scroll", onScroll);
// 鼠标滚动事件
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  if (scrollPos > 100) {
    $("#gamepoch-logo").attr("src", "../img/logo2.png");
    $(".menu-top").addClass("menu-shrink");
  } else {
    $("#gamepoch-logo").attr("src", "../img/logo.png");
    $(".menu-top").removeClass("menu-shrink");
  }
}

const getJsonFromUrl = () => {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
};
