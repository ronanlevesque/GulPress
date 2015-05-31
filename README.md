# GulPress

> Gulp-based toolkit for WordPress theme development (Sass and ES6)

## Purpose

**GulPress** aims at making things easier when developing WordPress themes. It is based on [Gulp](http://gulpjs.com/) and supports Sass and ES6 (including new modules syntax).

The good part is that **GulPress** can also be used on other projects as long as you respect its folders hierarchy!

## Installation

1. Launch your local server
2. Download and unzip the folder in your WordPress themes folder
3. Install npm from [Nodejs.org](https://nodejs.org/) and run `npm install` in your themes folder
4. Run `gulp`
5. ... And that's it! Enjoy a smooth development workflow :)

## Details

**GulPress** is packed with a lot of goodies. Below is a list of all the things it will do for you:

- Livereload on CSS, PHP, JS files and images changes (requires [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension)
- Sass files compilation and autoprefix
- ES6 syntax support (including modules - recommended)
- JS sourcemaps
- JS tests with `gulp jshint`
- JS and CSS minification
- JPG, PNG, GIF and SVG optimization
- Notifications system.

## Folders structure

<pre>yourtheme
|&mdash; css
|  |&mdash; yourstylesminified.css
|&mdash; dev
|  |&mdash; js
|  |  |&mdash; yourscripts.js
|  |&mdash; sass
|     |&mdash; yourstyles.scss
|&mdash; img
|  |&mdash; yourimages.*
|&mdash; js
   |&mdash; yourscriptsminified.js</pre>

Please note, this can be easily changed inside `gulpfile.js` to match your preferences.
