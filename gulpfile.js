"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
/*Водопроводчик. Продолжает обработку при ошибке*/
var plumber = require("gulp-plumber");

/*автопрефиксер*/
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

/*Локальный разработч. сервер*/
var server = require("browser-sync").create();

/* обработка и запись в css файл*/
gulp.task("style", function(){

  gulp.src("less/style.less")

    .pipe(plumber())

    .pipe(less())

    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))

    .pipe(gulp.dest("css"))
    /* Отслеживание изменения стилей для лок. сервера** */
    .pipe(server.stream());
});

/* Локальный сервер*/
gulp.task("serve", ["style"], function() {
  server.init({
    server: "."
  });

  gulp.watch("less/**/*.less", ["style"]);
  /* Отслеживание изменения html для лок. сервера с перезагрузкой** */
  gulp.watch("*.html")
    .on("change", server.reload);
});
