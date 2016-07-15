const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

gulp.task('clean', function() {  
  return del(['dist']);
});

gulp.task('masterclean', function() {  
  return del(['dist','node_modules','src/node_modules','src/bower_components']);
});


gulp.task('ts-build', ['clean'],function() {
  
   return gulp
    .src('app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
  
});