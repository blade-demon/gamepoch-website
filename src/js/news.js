console.log("news page include this js files");

$(function() {
  // 获取新闻ID
  var params = getJsonFromUrl();
  var newsId = params.id;
  if (newsId !== undefined) {
    console.log(newsId);
    getNewsById(newsId);
  }
});

// 向服务器获取单条新闻
const getNewsById = id => {
  $.get(
    `https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.com&id=${id}`
  ).then(
    newsData => {
      const news = newsData[0];
      document.title = news.post_title;
      $("#news-container").html(`
        <h3>${news.post_title}</h3>
        <p>${news.post_modified}</p>
        <p>${news.post_source}</p>
          ${news.post_content.replace(
            /http\:\/\/139.196.239.213/g,
            "https://newseditor.gamepoch.com"
          )}
      `);
    },
    error => {
      console.error(error);
      window.location.href = "404.html";
    }
  );
};

const getJsonFromUrl = () => {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
};
