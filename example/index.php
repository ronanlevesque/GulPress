<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GulPress &ndash; WordPress theming, made easy</title>
  <?php wp_head(); ?>
</head>
<body>
  <article>
    <h1>GulPress</h1>
    <h2>WordPress theming, made easy</h2>
    <p><strong>GulPress</strong> is a Gulp-based toolkit including <em>Sass</em> and <em>ES6</em> support, especially built for WordPress development. Once launched, it will watch for any changes on your CSS, JS and images, and will reload your site (this will require the <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei">LiveReload</a> extension).</p>
    <p>The folders architecture is the following:</p>
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
    <p>If you want to create a different structure, this can be easily customized inside <code>gulpfile.js</code>.</p>
    <p>You will find all the details about <strong>GulPress</strong> in the Github <a href="https://github.com/ronanlevesque/GulPress/blob/master/README.md">Readme</a>.</p>
  </article>
  <footer>
    <p>Built with love by Ronan Levesque</p>
    <a href="http://ronanlevesque.fr"><img src="<?php bloginfo('template_directory'); ?>/img/logo-ronan-levesque.svg?" alt=""></a>
  </footer>
  <?php wp_footer(); ?>
</body>
</html>
