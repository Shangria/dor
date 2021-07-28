let project_folder= "dist";
let source_folder = "src";

let fs = require('fs');

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder +  "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: [source_folder + "/*.html", "!"+source_folder + "/_*.html"],
    css: [source_folder +  "/scss/main.scss", "/scss/*.css"],  // другие файлы копироваться не будут
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpeg,jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/**/*",
  }, 
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder +  "/scss/**/*.scss",
    js: source_folder + "/js/*.js",
    img: source_folder + "/img/**/*.{jpeg,jpg,png,svg,gif,ico,webp}"
  },
  clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  del = require("del"),
  scss = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"), //добавляет префиксы
  group_media = require("gulp-group-css-media-queries"),  // групирирует медиа запросы
  clean_css = require("gulp-clean-css"), //оптимизирует файл
  rename = require("gulp-rename"),  //переименование файла
  uglify = require("gulp-uglify-es").default,
  fonter = require("gulp-fonter");




function browserSync(params) {
  browsersync.init({
    server: {
      baseDir:  "./" + project_folder + "/"
    },
    port:3000,
    notify: false   //увидомления о обновлении браузера
  })
}

function html() {
  return src(path.src.html) //путь к исходным файлам
    .pipe(fileinclude()) //собирает файли
    .pipe(dest(path.build.html)) //в .pipe пишем команды для gulp
    .pipe(browsersync.stream()) //обновление страницы
}

function css() {
  return src(path.src.css) //путь к исходным файлам
    .pipe(
      scss({
        outputStyle: "expanded"  // что бы файл css не сжимался
      })
    )
    .pipe(
      group_media()
    )
    .pipe(
      autoprefixer({  // настройки 
          overrideBrowserslist: ["last 5 versions"],  //поддержка браузеров
          cascade: true //стиль написание префиксов каскад
      })
    )
    .pipe(dest(path.build.css)) //(выгрузка файла перез сжиманием и переименованием)
    .pipe(browsersync.stream())
    .pipe(clean_css()) //сжимаем файл
    .pipe(
      rename({
        extname: ".min.css" //переименовываем файл
      })
    )
    .pipe(dest(path.build.css)) //в .pipe пишем команды для gulp (выгрузка)
    .pipe(browsersync.stream()) //обновление страницы
}

function js() {
  return src(path.src.js) //путь к исходным файлам
    .pipe(fileinclude()) //собирает файли
    .pipe(dest(path.build.js)) //(выгрузка файла перез сжиманием и переименованием)
    .pipe(uglify()) //сжимаем файл
    .pipe(
      rename({
        extname: ".min.js" //переименовываем файл
      })
    )
    .pipe(dest(path.build.js)) //в .pipe пишем команды для gulp
    .pipe(browsersync.stream()) //обновление страницы
}

function images() {
  return src(path.src.img) //путь к исходным файлам
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(dest(path.build.img)) //в .pipe пишем команды для gulp
    .pipe(browsersync.stream()) //обновление страницы
}

// function fonts(){
//   src(path.src.fonts)
//     .pipe(dest(path.build.fonts));
// };

function cb() { }

function watchFiles(params) {  // слежка за файлами
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

// удаление папки dist
function clean(params) {
  return del(path.clean);
}
// подружить Gulp, что бы он их понимал, после удаление выполняеться html
let build = gulp.series(clean, gulp.parallel(js, css, html, images));


// проверка работоспосбности
let watch = gulp.parallel(build, watchFiles, browserSync); // открытие файлов одновременно

// подружить Gulp с новыми переменными, что бы он их понимал
// exports.fontsStyle = fontsStyle;
// exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build =  build;
exports.watch = watch;
exports.default = watch; // при запуске Gulp выполняеться данная переменная
