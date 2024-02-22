import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export function otfToTtf() {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export function ttfToWoff() {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(fonter({
      formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export function fontsStyle() {
  let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`

  fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, '', cb)
        let newFileOnly

        for (let i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split('.')[0]

          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName
            let fontWeight = (fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName)?.toLowerCase()

            let fontWightValue = 400

            switch (fontWeight) {
              case 'thin':
                fontWightValue = 100;
                break
              case 'extralight':
                fontWightValue = 200;
                break
              case 'light':
                fontWightValue = 300;
                break
              case 'medium':
                fontWightValue = 500;
                break
              case 'semibold':
                fontWightValue = 600;
                break
              case 'bold':
                fontWightValue = 700;
                break
              case 'extrabold':
              case 'heavy':
                fontWightValue = 800;
                break
              case 'black':
                fontWightValue = 900
                break
              default:
                fontWightValue = 400;
                break
            }

            fs.appendFile(fontsFile,
              `@font-face {
                  font-family: ${fontName};
                  font-display: swap;
                  src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
                  font-weight: ${fontWightValue};
                  font-style: normal;
               }`,
              cb
            )

            newFileOnly = fontFileName
          }
        }
      } else {
        console.log('Файл scss/fonts.scss уже существует.')
      }
    }
  })

  return app.gulp.src(`${app.path.srcFolder}`)
  function cb() {}
}
