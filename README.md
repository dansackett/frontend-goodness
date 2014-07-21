Frontend Goodness
=================

This is a great way to work with newer frontend technologies while allowing
you to add any backend you want alongside it. It uses [Gulp](http://gulpjs.com/)
to watch and build CoffeeScript and SASS for you as you work with AngularJS.

Who Is This Template For
========================

Ideally this is a great starting point for someone who wants to build an
application using AngularJS written in CoffeeScript classes. The Gulpfile and
components all are setup for seamless angular development using the
[ng-classify](https://github.com/CaryLandholt/ng-classify) approach. As well,
it enables you to write SASS for your CSS which makes CSS development much
faster.

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
* [FontAwesome](http://fontawesome.io/) - Excellent web fonts.

Getting Setup
=============

Clone this repo where you want your project to live:

    git clone git@github.com:dansackett/frontend-goodness

Next make sure you install nodeJS:

    sudo apt-get install -y python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

Next install bower (It's recommended to install it globally):

    sudo npm install -g bower gulp

Next install the gulp packages we'll use for this repo:

    sudo npm install

Next install bower components:

    bower install

Finally, type:

    gulp

If all was installed correctly, you will have a fully functional website setup
wherever your local server instance is located.

Using this project
==================

To work with this project, make sure you follow the steps above to set things
up properly. Once setup, all you will need to do is open a terminal and run:

    gulp

This will watch your `src/coffee` and `src/css` files (included nested
directories one level deeper) and compile them as you update them. It will
also account for added files.

To customize the source and destination folders, open the `gulp_config.yaml` file and
edit the items. There is a place for **additional** scripts as well that is
currently commented out. By default gulp will find all of your bower packages and
concatenate them and minify them into a single file `dependencies.min.js` and `dependencies.min.css`
respectively. By passing additional scripts into the config object, you can
include javascript, css, and font files into this minification process that
are outside the scope of bower.
