Frontend Goodness
=================

This is a great way to work with newer frontend technologies while allowing
you to add any backend you want alongside it. It uses [Gulp](http://gulpjs.com/)
to watch and build CoffeeScript and SASS for you as you work with AngularJS.

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

    sudo npm install -g bower

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

This project is meant to be a template to develop streamlined front-end
applications with the flexibility to include any backend stack that you want.
I have laid this particular project out to use AngularJS with CoffeeScript
classes. Once you type the `gulp` command into the terminal, the script will
watch for changes in the `src/css` and `src/coffee` folders. This includes
deeply nested folders as well. To learn more about how to write CoffeeScript
and AngularJS together for this project, read [here](https://github.com/CaryLandholt/ng-classify)
as it will give you the streamlined approach that I'm going for here.
Especially pay attention to the [module types](https://github.com/CaryLandholt/ng-classify#module-types)
which will allow you to move fast with angular.

If you choose to install more packages with bower make sure you run the `gulp`
command (if it's not already running) because this project will gather your
bower files for you and minify everything into `dependencies.min.js` and
`dependencies.min.css`.

Plugging a backend such as [phalconPHP](http://phalconphp.com/) is easy with
this layout. Your generated files will be output to a `public` directory and
you can grab them from there or reorganize as you see fit.
