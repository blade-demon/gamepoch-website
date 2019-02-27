// console.log("games page load this file");
// document.title = "Game";
import "../css/style.css";
const gamesList = [
  {
    id: 6,
    name: "黑暗军团",
    headerImg: "../img/games/dark-legion/coverImg.jpg",
    desc: [
      "《黑暗军团》是一款VR第一人称射击+魔法的游戏。玩家扮演的是一名执行太空任务的长官。在一次执行任务返回地球的过程中，飞船失事被迫降落到一颗神秘的星球上，为了能回到地球，在这个神秘的星球上开始了寻找能量块的探险，探险的过程中发现了一个惊天阴谋，有人在这个星球上正在秘密研制生化魔法人，如果这个阴谋得逞，将是人类的灾难。为了保护人类、保护地球你要阻止这一切。拿起手中的武器，把黑暗军团消灭吧！"
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
    name: "月蚀：血缘崛起",
    headerImg: "../img/games/lunar-stone/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "《月蚀-血源崛起》是第一人称VR射击游戏，特别定制的闪避系统和多套武器，场景，使得整个冒险战斗充满热血和激情。照顾好两位美丽温柔的女NPC，她们会帮助你一起对抗邪恶生物。拿起你的剑，伴随着原创的史诗电影级音乐，去享受这一场酣畅淋漓的冒险历程。"
    ],
    video: "../img/media/lunar-stone.mp4",
    videoPoster: "../img/games/lunar-stone/thumbnail.jpg",
    thumbnailImg: "../img/games/lunar-stone/thumbnail.jpg",
    developer: "GQJoy",
    copyRight: "©2017 GQJoy Co.,Ltd All right reserved.",
    galleryImgs: [
      "../img/games/lunar-stone/gallery1.jpg",
      "../img/games/lunar-stone/gallery2.jpg",
      "../img/games/lunar-stone/gallery3.jpg"
    ]
  },
  {
    id: 8,
    name: "牧场星球",
    headerImg: "../img/games/ranch-planet/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "《牧场星球》是由奥嘉科技研发、定义的全球首款WRG VR游戏。在遥远的星际，有个地方叫牧场星球。这里生活着一位善良的老国王和他可爱的小女儿瑞拉公主，然而一场突如其来的变故打破了牧场星球往日的宁静——老国王病重，可恶的铁皮人侍卫趁机要挟国王想要获得整个星球的统治权与小公主，否则就要毁灭星球上所有的人和动物，情急之下，小公主向星际护卫队发出了求救信号，一场星际保卫战即将开始..."
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
    name: "幻象大师-伊涅斯塔",
    headerImg: "../img/games/iniesta/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "《幻象大师-伊涅斯塔》是desports 双刃剑体育开发制作的全球第一部真正意义上的足球VR影片！球迷除了可以通过卓越的虚拟现实技术，近距离感受小白的个人魅力，还可以在观影中获取小白专业的足球指点，欣赏精彩的球技展示，并且穿越时空，置身于当年的历史性区间，回味伊涅斯塔在斯坦福桥和约翰内斯堡绝杀时刻的美妙瞬间。"
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
    name: "光之追迹者",
    headerImg: "../img/games/light-tracer/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "《光的追迹者》是Void Dimensions为VR游戏世界带来的一股清新势力。不再是千篇一律的第一人称VR射击，也不是简单粗暴的第三人称VR冒险，我们用自己的方式创造了这个以优雅为最高目标的游戏，带着玩家在VR时代，重新找到属于游戏的最初的快乐，发现传统中蕴含的新魅力。",
      "《光的追迹者》采用了独特的专利操作方式，通过空间中的手柄来控制属于玩家的两只手——一只手通过抓取控制场景，另一只手握着法杖，利用法杖射出的光线来控制主角——人类王国的公主，探索这个神奇的世界。正如标题所提示的，这是一个关于追寻这束光的女孩的故事。在代表游戏未来方向的VR世界里，体验前所未有的新形态平台跳跃和解谜吧。在这个世界里，我们允许玩家通过左手来直接地操作各种机关，通过改变地形、触发特殊机关等方式，为公主的前进扫清障碍。游戏中每个关卡都经过精心设计，谜题多种多样，既有传统的解谜要素，也有VR独有的创意设计。除此之外，游戏中还有丰富的战斗内容，试图在优雅的解谜和惊险的战斗中带给玩家多样的游戏节奏，真正享受VR游戏的乐趣。"
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
    name: "仰冲异界",
    headerImg: "../img/games/obduction/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "作为《神秘岛》系列的精神续作，《仰冲异界》是步行冒险解谜游戏的新篇章。坠入神秘荒芜的哈纳斯，遍地黄沙，空无一人。在这个开阔迷人的世界中搜寻线索，解开烧脑的谜题，探知哈纳斯的真相，找到归乡之路。"
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
    name: "梦幻垂钓",
    headerImg: "../img/games/dream-angling/coverImg.jpg",
    platform: "PS4",
    desc: [
      "这是一个关于在梦中追寻回忆的故事，玩家在游戏中通过完成垂钓任务去搜寻关于主人公不同时段的重要记忆片段，从而感受主人公成长的一段心路历程。",
      "游戏玩法强调休闲体验同时模拟出垂钓的核心体验：“寻找目标——抛竿——收线——捕获——将鱼变成星星。”游戏中有36种类型的鱼与4组风格各异的场景。游戏同时提供了故事模式与挑战模式",
      "故事模式：玩家需要在每一周目里完成十个相应的挑战任务去收集获得回忆道具。最终回忆的碎片会在日记本中显现并呈现出一段经历。游戏中总共有40个回忆关键道具，但每周目只会出现其中10个，而道具的选择出现来自于玩家的选择。所以玩家每周目的故事体验将会随着玩家的选择带来不一样的变化以吸引玩家多次探索。 挑战模式：在该模式里玩家需要尽可能的在有限时间里钓起最多的鱼，获得高分。挑战模式中鱼的种类会随着玩家在故事模式中的捕获增加。"
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
    name: "音姬",
    headerImg: "../img/games/audio-beats/coverImg.jpg",
    platform: "PS(VR)",
    desc: [
      "《音姬》是一款致敬经典的VR节奏类游戏，从游戏玩法至歌曲选择及制作工艺都秉承了传统音乐游戏的制作方式，以期待在VR中带给音游玩家最本质的核心体验。",
      "为了更好的让玩家体验音游中的视觉判断集中点，我们把音游中敲击的键盘化成了打击面板放在了玩家的面前，在初步试探后就能毫无障碍的盲打获得准确的操作。",
      "然后将命中点设定在玩家面前一定距离的地方以供玩家更精确的看到音键掉落的位置及时间点，为精准打击优化操作，奠定了音游竞技性的基础。",
      "在操作的设定上，设计了单键、长键以及方向键的操作方式，使玩家在打击点过程中体验到不同的律动打击的效果。当然，这对于玩家的要求也更高了，玩家不只需要依靠音感及手速来提升精准度，更需要调动全身的肌肉协调性来适应VR全方位操作，不只从视觉上3D化，从操作上也给予了玩家全空间击打的体验以获得专属于VR的游戏魅力。"
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
    name: "超级连击王",
    headerImg: "../img/games/super-comboman/coverImg.jpg",
    platform: "PS4",
    desc: [
      "这是一个动作英雄的新故事。他是一个拥有着很放克的梭鱼状头顶鼓包，身穿夏威夷衬衫，吃着巧克力曲奇饼干，挎着一个能说话的腰包（对的，能说话），充满能量的岛民。名字叫斯特拉格斯，他是工人阶级的",
      "帮助斯特拉格斯与名为兜兜可的大型建筑公司的一群坏家伙和大老板们战斗，在这场2D动作冒险之旅中保护自己和他的弟弟吧。通过各种关卡，从经典2D格斗游戏的动作列表中解锁各种疯狂的连击，可以将你的同事们打穿墙壁并获得报酬。"
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
    name: "生生不息",
    headerImg: "../img/games/life-goes-on/coverImg.jpg",
    platform: "PS4",
    desc: [
      "决定去寻找生命之杯。他号召了大陆上成千上万的玩偶骑士去寻找生命圣杯。",
      "出于对生命与幸福的追求，冒险者们热切地响应了这个荣耀万分的使命。",
      "而后世的人们将会回想起这位国王坚韧不拔的精神，无与伦比的勇气，还有那些为目标而牺牲的玩偶勇士们。"
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
    name: "音量",
    headerImg: "../img/games/volume/coverImg.jpg",
    platform: "PS4 PSV PSVR",
    desc: [
      "《音量》是一款潜入解密游戏。玩家将化身为未来守护者，灵活利用声音的力量，越过守卫和机关的重重包围，收集钻石、解开惊天秘密。",
      "多样化的道具：",
      "大量功能独特的道具—消音器、诱饵炸弹和各种陷阱道具。",
      "未来感的视听享受：",
      "独特的未来美术风格和令人记忆深刻的音乐，带来前所未有的游戏体验。"
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
    name: "四元素大冒险",
    headerImg: "../img/games/element4l/coverImg.jpg",
    platform: "PS4",
    desc: [
      "《四元素大冒险》是一款休闲冒险类游戏。游戏中，玩家将操控一个特殊的元素在奇幻的世界里闯关。这个特殊元素，可以变成空气漂浮在空中，但是尖刺是它的天敌；也可以变成冰块，但是火山是它的噩梦；还可以变成岩石或者火焰。总之，玩家要根据遇到的具体情况，来变换4种形态，针对不同的地形陷阱选择不同的物理形态元素进行通关，需要指出的是，四种元素不会自动前进，它们前进的动力完全是靠——惯性！"
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
    name: "虚空之虫",
    headerImg: "../img/games/nihilumbra/coverImg.jpg",
    platform: "PS4",
    desc: [
      "《虚空之虫 Nihilumbra》是一款非常有趣的冒险解谜，游戏画面精致，并且游戏过程伴有字幕和旁白，很有感觉，支持中文。游戏的一开始是这个主角小黑团的诞生，没有名字。玩家控制小黑团前进，每个画面都会有英文旁白，是剧情介绍。小主角诞生在一个叫“Void”的世界里，中文是虚空的意思，它不知道自己是谁，不想待在Void的世界里，就不断逃离。故事的第二个章节起主角就变了样子，它看到一个稻草人，就把自己变成一个稻草人的模样想来匹配和融入这个世界。随后先后进入了冰雪、森林、沙漠、火山、城市五个场景，分别学会了5种color（颜色）的能力，越是后面的场景越是需要多种能力混合使用。整个游戏是以小主角的逃亡和过程中的成长为主线，英文的旁白就是整个游戏的剧情所在，非常精炼。"
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
    name: "永不孤单",
    headerImg: "../img/games/never-alone/coverImg.jpg",
    platform: "PS4",
    desc: [
      "永不孤单游戏下载是一款横版过关游戏，在这款游戏中，玩家将控制一个女孩和一只狐狸，在关卡中切换交替控制。两个角色会同时出现在屏幕中，各自有自己的属性和能力，需要适时切换。例如狐狸可以沿墙大跳，而女孩可以攀登障碍。",
      "《永不孤单》是个很迷人的冒险解谜游戏，游戏的画面和声音很好的将严寒环境的孤独和寒冷表现了出来，故事也是非常的吸引人，加上设计的非常优秀的谜题，让游戏充满了可玩性，由于是要两个角色之间来回切换进行操作，因此游戏还可以双人合作游戏，一人操作一个来合作解谜通关，能让游戏的乐趣大大增加，喊上小伙伴来一起进行游戏吧。"
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
    $developer.text("游戏开发商：" + gameInfo[0].developer);
    $name.text("游戏名称：" + gameInfo[0].name);
    $platform.text("平台：" + gameInfo[0].platform);
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
