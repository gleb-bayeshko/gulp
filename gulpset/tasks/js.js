import webpack from 'webpack-stream'

export function js() {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'app.min.js'
      },
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}
