var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var autoprefixer = require("autoprefixer");
var browserify = require("browserify");
var pump = require("pump");
var mainBowerFiles = require("gulp-main-bower-files");
var buffer = require("vinyl-buffer");
var source = require("vinyl-source-stream");
var browserSync = require("browser-sync").create();
var minimist = require("minimist");
var es = require("event-stream");

var envOptions = {
  string: "env",
  default: {
    env: "develop"
  }
};
var options = minimist(process.argv.slice(2), envOptions);

// Copy html files into build folder
gulp.task("copyHTML", function() {
  return gulp
    .src("src/**/*.html")
    .pipe(
      $.if(
        options.env === "production",
        $.htmlmin({
          collapseWhitespace: true
        })
      )
    )
    .pipe(gulp.dest("build"));
});

// copy font
gulp.task("copyFont", function() {
  return gulp.src("src/fonts/*.*").pipe(gulp.dest("build/fonts"));
});

// Clean .tmp and build folder
gulp.task("clean", function() {
  return gulp
    .src([".tmp", "build", ".publish"], { read: false })
    .pipe($.clean());
});

// Bower files => .tmp folder
gulp.task("bower", function() {
  return gulp
    .src("bower.json")
    .pipe(
      mainBowerFiles({
        overrides: {
          jquery: {
            main: ["dist/jquery.js", "dist/jquery.min.js"]
          },
          bootstrap: {
            main: ["dist/js/*.js", "dist/css/*.*", "dist/fonts/*.*"]
          },
          aos: {
            main: ["dist/*.js", "dist/*.css"]
          },
          "font-awesome": {
            main: ["css/*.min.css", "fonts/*.*"]
          }
        }
      })
    )
    .pipe(gulp.dest(".tmp/vendors"));
});

//  SASS => CSS
gulp.task("sass", function() {
  var plugins = [
    autoprefixer({
      browsers: ["last 2 version", "> 5%"]
    })
  ];
  return gulp
    .src("src/scss/**/*.scss")
    .pipe($.rename("bundle.css"))
    .pipe(
      $.sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe($.plumber())
    .pipe($.sass().on("error", $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe($.if(options.env === "production", $.cleanCss()))
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
});

// Compress images
gulp.task("imagemin", function() {
  return gulp
    .src("src/img/**/*")
    .pipe(
      $.if(
        options.env === "production",
        $.imagemin({
          interlaced: true,
          progressive: true,
          optimizationLevel: 9,
          svgoPlugins: [{ removeViewBox: true }]
        })
      )
    )
    .pipe(gulp.dest("build/img"));
});

// Copy favicon.ico file
gulp.task("copyFavicon", function() {
  return gulp
    .src("src/favicon.ico")
    .pipe(
      $.if(
        options.env === "production",
        $.imagemin({
          interlaced: true,
          progressive: true,
          optimizationLevel: 5,
          svgoPlugins: [{ removeViewBox: true }]
        })
      )
    )
    .pipe(gulp.dest("build"));
});

// Tansfer js files from ES6 to ES5 with Babel
gulp.task("babel", function() {
  return (
    gulp
      .src("src/js/**/*.js")
      .pipe($.sourcemaps.init())
      .pipe(
        $.babel({
          presets: ["env"],
          plugins: ["transform-runtime"]
        })
      )
      // .pipe($.concat("bundle.js"))
      .pipe($.sourcemaps.write("."))
      .pipe(gulp.dest("build/js"))
  );
});

// Browserify makes posible require("modules") in the browser
gulp.task("browserify", ["babel"], function() {
  var entryFiles = [
    "build/js/index.js",
    "build/js/games.js",
    "build/js/news.js"
  ];

  var tasks = entryFiles.map(function(entry) {
    return browserify({ entries: [entry], debug: true })
      .bundle()
      .pipe(source(entry))
      .pipe(buffer())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.sourcemaps.write("."))
      .pipe(gulp.dest("./"));
  });

  //创建一个合并流
  return es.merge.apply(null, tasks);
});

gulp.task("eslint", function() {
  gulp
    .src("src/js/**/*.js")
    .pipe($.cached("eslint"))
    .pipe($.eslint())
    .pipe($.eslint.format());
});

// Compress Javascripts files
gulp.task("compressJS", ["browserify"], function(cb) {
  pump(
    [
      gulp.src(["build/js/index.js", "build/js/games.js", "build/js/news.js"]),
      $.uglify({
        compress: {
          drop_console: true
        }
      }),
      gulp.dest("build/js")
    ],
    cb
  );
});

// Compress vendor Javascripts files
gulp.task("vendorJS", function() {
  var srcFiles = [
    ".tmp/vendors/jquery/dist/jquery.js",
    ".tmp/vendors/bootstrap/dist/js/bootstrap.js",
    ".tmp/vendors/aos/dist/aos.js",
    ".tmp/vendors/vanilla-lazyload/dist/lazyload.js"
  ];
  if (options.env === "production") {
    srcFiles = [
      ".tmp/vendors/jquery/dist/jquery.min.js",
      ".tmp/vendors/bootstrap/dist/js/bootstrap.min.js",
      ".tmp/vendors/aos/dist/aos.js",
      ".tmp/vendors/vanilla-lazyload/dist/lazyload.min.js"
    ];
  }
  return gulp
    .src(srcFiles)
    .pipe($.concat("vendors.js"))
    .pipe(
      $.if(
        options.env === "production",
        $.uglify({
          compress: {
            drop_console: true
          }
        })
      )
    )
    .pipe(gulp.dest("build/js"));
});

// Compress vendor CSS file
gulp.task("vendorCSS", function() {
  return gulp
    .src(".tmp/vendors/**/*.css")
    .pipe($.concat("vendors.css"))
    .pipe($.if(options.env === "production", $.cleanCss()))
    .pipe(gulp.dest("build/css"));
});

gulp.task("vendorFont", function() {
  return gulp
    .src(".tmp/vendors/**/*.{ttf,otf,eot,svg,woff,woff2}")
    .pipe($.flatten())
    .pipe(gulp.dest("build/fonts"));
});

// Start server for development
gulp.task(
  "serve:dev",
  ["vendorJS", "vendorCSS", "vendorFont", "browserify"],
  function() {
    console.log("当前环境：" + options.env);
    browserSync.init({
      server: {
        baseDir: "build"
      }
    });
    // Watch the files in the src folder.
    gulp.watch("src/**/*.html", ["copyHTML"]);
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("src/fonts/*.*", ["copyFont"]);
    // gulp.watch("src/**/*.jade", ["jade"]);
    gulp.watch("src/**/*.js", ["eslint", "browserify"]);
    // Reload the browser when the files changes in the build folder.
    gulp.watch("build/**/*.css").on("change", browserSync.reload);
    gulp.watch("build/**/*.js").on("change", browserSync.reload);
    gulp.watch("build/**/*.html").on("change", browserSync.reload);
  }
);

// Start Serve for production
gulp.task(
  "serve:dist",
  ["vendorJS", "vendorCSS", "vendorFont", "compressJS"],
  function() {
    console.log("当前环境：" + options.env);
    browserSync.init({ server: { baseDir: "build" }, index: "index.html" });
    // Watch the files in the src folder.
    gulp.watch("src/**/*.html", ["copyHTML"]);
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("src/fonts/*.*", ["copyFont"]);
    gulp.watch("src/**/*.js", ["eslint", "compressJS"]);
    // Reload the browser when the files changes in the build folder.
    gulp.watch("build/**/*.css").on("change", browserSync.reload);
    gulp.watch("build/**/*.js").on("change", browserSync.reload);
    gulp.watch("build/**/*.html").on("change", browserSync.reload);
  }
);

// Initial files
gulp.task(
  "default",
  $.sequence(
    "clean",
    "copyHTML",
    "copyFont",
    "sass",
    "bower",
    "eslint",
    "imagemin",
    "copyFavicon"
  )
);

// Define a deploy task in your gulpfile.js (as below) which can be used to push to gh-pages going forward.
gulp.task("deploy", function() {
  return gulp.src("build/**/*").pipe($.ghPages());
});
