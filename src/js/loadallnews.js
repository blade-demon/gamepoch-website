getAllNews();

function getAllNews() {
  $.get(
    "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn"
  )
    .then(data => {
      // console.log(data);
      // 新闻详细数据列表
      // newsArray = data;
      // console.log(response.data);
      // console.log(newsArray);
      // console.log(document.getElementsByClassName("container"));
      // 创建新闻
      insertNewsCover(data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// 插入新闻元素
function insertNewsCover(newsArray) {
  var htmlString = "";
  // console.log(newsArray.length);
  newsArray.map(function(news, index) {
    // console.log(index);
    if (index < 10) {
      htmlString +=
        '<div class="col-xs-12 newsSection" data-aos="zoom-in">      <div class="col-md-8 col-sm-12">          <a href="news.html?id=' +
        news.id +
        '">          <h2 style="margin-top: 2%; font-size:2.8rem; font-weight: normal">' +
        news.post_title +
        '</h2>          </a>          <p style="margin-top: 5%; font-size:1.5rem; color: #777">' +
        news.post_excerpt +
        '</p><p style="margin-top: 5%; font-weight: bold;color: #777; font-size: 1.2rem">by ' +
        news.post_source +
        " " +
        news.post_modified +
        '</p>                </div>      <div class="col-md-4 col-sm-12"> <img class="img-responsive lazyload" alt="新闻图片" data-src="https://newseditor.gamepoch.com/thinkcmf/data/upload/' +
        JSON.parse(news.smeta).thumb +
        '">      </div>      </div>  ';
    }
  });

  $("#news-container").html(htmlString);
}
