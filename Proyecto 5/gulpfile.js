/* exportamos sass y gulp */
const {src,dest,watch,series}=require('gulp');
const sass =require('gulp-sass')(require('sass'));

//exportamos autoprefixer
const postcss = require('gulp-postcss')
const autoprefixer =require('autoprefixer');

/* exportamos el gulpimagen */
const imagemin =require('gulp-imagemin');

/* CSS NANO */
const cssnano = require('cssnano');
/* sourcemaps */
const sourcemaps =require('gulp-sourcemaps');






//FUNCION PARA COMPILAR SASS
function css(done){

    //identificamos la hoja de sass
    src('src/scss/app.scss')
    /* sourcemaps */
    .pipe(sourcemaps.init())


    //compilamos sass
    .pipe(sass({outputStily: 'compressed'}))

    //pipe para usar autoprefixer
    .pipe(postcss([autoprefixer(),cssnano()]))

    /* sourcemap */
    .pipe(sourcemaps.write('.'))
    //guardamos
    .pipe(dest('build/css'))


    done();



}
function script(done){
      //identificamos archivo
    src('src/js/app.js')


    //guardamos archivo
    .pipe(dest('build/js'))


    done();



}


function imagenes(done){
    src('src/img/**/*')
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest('build/img'))

    done();


}
function dev (done){

    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js',script);
    watch('src/img/**/*', imagenes);


    done();
}

exports.css = css;
exports.script = script;
exports.imagenes = imagenes;
exports.dev = dev;
exports.default = series(css,script,imagenes,dev);