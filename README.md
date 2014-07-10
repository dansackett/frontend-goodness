Frontend Goodness
=================

This is a great way to work with newer frontend technologies while allowing
you to add any backend you want alongside it. It uses [Gulp](http://gulpjs.com/)
to watch and build CoffeeScript and SASS for you as you work.

Features
========

* [jQuery](http://jquery.com/) - Because it's so useful.
* [AngularJS](https://angularjs.org/) - Because it's the future of data-driven
  front-end frameworks.
* [CoffeeScript](http://coffeescript.org/) - Because it makes writing all
  things JavaScript easier.
* [Twitter Bootstrap](http://getbootstrap.com) - For quick scaffolding.
* [SASS](http://sass-lang.com/) - Making writing CSS less painful.
* [Gulp](http://gulpjs.com/) - Tool to build all files and compile for production.

Getting Setup
=============

Clone this repo where you want your project to live:

    git clone git@github.com:dansackett/frontend-goodness

Next make sure you install nodeJS:

    sudo apt-get install -y python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

Next install bower:

    sudo npm install -g bower

Next install gulp:

    sudo npm install gulp

Next install the packages we'll use for this repo:

    sudo npm install --save-dev gulp-minify-css
    sudo npm install --save-dev gulp-coffee
    sudo npm install --save-dev gulp-sass
    sudo npm install --save-dev gulp-watch

Next install bower components:

    bower install

You're done setting up!

Using this project
==================

To actively develop on this project, all you have to do is go to the terminal
and type the following:

    gulp watch-files

Now as you edit coffeescript files and SASS files you will have them
automatically compiled for you. Refresh the page and you can see changes.
