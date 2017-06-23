const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const flatten = require("gulp-flatten");
const rename = require("gulp-rename");
const del = require("del");
const runSequence = require("run-sequence");

const inputPath = "./svg-input/**/*.svg";
const outputPath = "./svg-output";

/*-------------OUTPUT FILE NAME------------*/
const outputFileName = "acs-icons.svg";
/*-----------------------------------------*/

const config = {
	mode: {
		symbol: true
	}
};

gulp.task("default", () => {
	return gulp.start("build");
});


gulp.task("build", () => {
	return runSequence(
		"build-clean",
		"build-icons");
});

gulp.task("build-clean", () => {
	return del([outputPath])
});

gulp.task("build-icons", () => {
	return gulp.src(inputPath)
		.pipe(svgSprite(config))
		.pipe(flatten())
		.pipe(rename(outputFileName))
		.pipe(gulp.dest(outputPath));
});