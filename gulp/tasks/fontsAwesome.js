// let { dest, src, } = require('gulp');

// module.exports = function copyfontawesomeWebfontsTask() {
//   return src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
//     .pipe(dest('build/fonts'));    // here is my font folder
// }

let { dest, src, } = require('gulp');
const fileExists = require('file-exists');
const gulpif = require('gulp-if');

const webFontsPath = 'node_modules/@fortawesome/fontawesome-free/webfonts/*';
const fontawesomeWebfont = './node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot';

console.log("Files already have coped ", fileExists.sync(fontawesomeWebfont));

module.exports = function copyfontawesomeWebfontsTask() {
  return gulpif(
    fileExists.sync(fontawesomeWebfont),
    src([webFontsPath]).pipe(dest('build/fonts'))
  );
}


