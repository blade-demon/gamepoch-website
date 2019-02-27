import AOS from "aos";
import "aos/dist/aos.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.min.css";
import "waypoints/lib/jquery.waypoints.min.js";
import "lazysizes";
import "../css/style.css";

AOS.init({
  offset: 200,
  easing: "ease-out-back",
  duration: 1500
});

const gamesWaypoint = new Waypoint({
  element: document.getElementById("games"),
  handler: function(direction) {
    if (direction === "down") {
      console.log("load all games...");
      import("./loadallgames");
    }
  },
  offset: window.innerHeight - 30
});

const newsWaypoint = new Waypoint({
  element: document.getElementById("news"),
  handler: function(direction) {
    if (direction === "down") {
      console.log("load all news...");
      import("./loadallnews");
    }
  },
  offset: window.innerHeight - 30
});

$(document).ready(function() {
  $(document).on("scroll", onScroll);

  $("#weixin-icon").on("click", function() {
    $("#modal").modal();
  });

  $(".modal-dialog").on("click", function() {
    $("#modal").modal("hide");
  });

  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  navMain.on("click", "a:not([data-toggle])", null, function() {
    navMain.collapse("hide");
  });

  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    if ($(this).attr("href") === "#") {
      return;
    }
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
});

// 鼠标滚动事件
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("nav a").each(function() {
    var currLink = $(this);

    if (currLink.attr("href") === "http://www.gamepoch.com") {
      return;
    }
    if (currLink.attr("href") === "http://nba2k19.gamepoch.com") {
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

// 延迟执行ga初始化代码
window.onload = function() {
  (function(b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] ||
      (b[l] = function() {
        (b[l].q = b[l].q || []).push(arguments);
      });
    b[l].l = +new Date();
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = "https://www.google-analytics.com/analytics.js";
    r.parentNode.insertBefore(e, r);
  })(window, document, "script", "ga");
  ga("create", "UA-82639755-1", "auto");
  ga("send", "pageview");
};
