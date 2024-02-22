import gulp from 'gulp'
import { path } from './gulpset/config/path.js'

import { plugins } from './gulpset/config/plugins.js'

import { copy } from './gulpset/tasks/copy.js'
import { reset } from './gulpset/tasks/reset.js'
import { html } from './gulpset/tasks/html.js'
import { server } from './gulpset/tasks/server.js'
import { scss } from './gulpset/tasks/scss.js'
import { images } from './gulpset/tasks/images.js'
import { otfToTtf, ttfToWoff, fontsStyle } from './gulpset/tasks/fonts.js'

global.app = {
  gulp,
  path,
  plugins,
}

function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, images))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)
