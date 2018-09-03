console.log("index.js file works at index page");

import lazyLoad from "vanilla-lazyload";

let LazyLoad = new lazyLoad({
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
  $('a[href^="#"]').on("click", function(e) {
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

  getAllNews();
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

    if (scrollPos > 100) {
      $("#gamepoch-logo").attr("src", "../img/logo2.png");
      $(".menu-top").addClass("menu-shrink");
    } else {
      $("#gamepoch-logo").attr("src", "../img/logo.png");
      $(".menu-top").removeClass("menu-shrink");
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
  fetch(
    "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.com"
  )
    .then(response => response.json())
    .then(
      data => {
        // 新闻详细数据列表
        newsArray = data;
        // console.log(response.data);
        // console.log(newsArray);
        // console.log(document.getElementsByClassName("container"));
        // 创建新闻
        insertNewsCover(newsArray);
      },
      error => {
        console.log(error);
      }
    );
};

// 插入新闻元素
const insertNewsCover = newsArray => {
  var htmlString = "";
  // console.log(newsArray.length);
  newsArray.map(function(news, index) {
    // console.log(index);
    if (index < 10) {
      htmlString +=
        '  \n\t\t\t    <div class="col-xs-12 newsSection" data-aos="zoom-in">\n\t\t\t        <div class="col-md-8 col-sm-12 " style="margin-bottom: 5rem;">\n\t\t\t            <a href="news.html?id=' +
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
  var newsImageLazyLoad = new lazyLoad({ elements_selector: ".lazy" });
  newsImageLazyLoad.update();
  // var newsLazyLoad = new lazyLoad({
  //   container: document.getElementsByClassName("newsSection")
  // });
};
