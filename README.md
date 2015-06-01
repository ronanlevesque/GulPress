# GulPress

> Gulp-based toolkit for WordPress theme development (Sass and ES6)

## Purpose

**GulPress** aims at making things easier when developing WordPress themes. It is based on [Gulp](http://gulpjs.com/) and supports Sass and ES6 (including new modules syntax).

The good part is that **GulPress** can also be used on other projects as long as you respect its folders hierarchy!

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

## Installation

1. Launch your local server
2. Download and unzip the folder in your WordPress themes folder
3. Install npm from [Nodejs.org](https://nodejs.org/) and run `npm install` in your themes folder
4. Run `gulp`
5. Launch LiveReload extension
6. ... And that's it! Enjoy a smooth development workflow :)

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


## License

The MIT License (MIT)

Copyright (c) 2015 Ronan Levesque

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
