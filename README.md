Frontend Goodness
=================

This is a great way to work with newer frontend technologies while allowing
you to add any backend you want alongside it. It uses [Gulp](http://gulpjs.com/)
to watch and build CoffeeScript and SASS for you as you work with AngularJS.

Who Is This Template For
========================

Ideally this is a great starting point for someone who wants to build an
application using AngularJS written in CoffeeScript. As well,
it enables you to write SASS for your CSS which makes CSS development much
faster.

Features
========

* [AngularJS](https://angularjs.org/) - Because it's the future of data-driven
  front-end frameworks.
* [AngularJS Bootstrap](http://angular-ui.github.io/bootstrap/) - Because it
  replaces jQuery for Bootstrap.
* [UI-Router](https://github.com/angular-ui/ui-router) - Because it is the
  community standard for routing AngularJS apps.
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

Next install the NPM packages we'll use for this repo:

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

The default task for Gulp is a watch command which monitors changes to all
files in the `src/coffee` and `src/css` directories. This is the primary way
of working with the project.

AngularJS Modules
=================

All AngularJS is modular in the sense that it uses module files to handle
linking and compiling. You can see this in the `src/coffee/layout` folder. In
order to add new modules, use this case as your base. For instance, a module
file like so could be:

**src/coffee/example/example.module.coffee**:

    (() ->
        angular.module 'app.example', [
          'app.example.controllers',
          'app.example.services',
        ]

        angular.module 'app.example.controllers', []
        angular.module 'app.example.services', []
    )()

This module file will then expect you create the following directories:

* `src/coffee/example/controllers/`
* `src/coffee/example/services/`

Within these directories, we can build our modules like so:

**src/coffee/example/controllers/example.controller.coffee**:

    (() ->
        ##
        # @ngInject
        ##
        ExampleController = () ->
            vm = this

            activate = () ->
                return

            activate()
            return

        angular
        .module 'app.example.controllers'
        .controller 'ExampleController', ExampleController
    )()

As you can see, this pattern is then reproduced to build perfect module
components which when concatenated together for the distribution version will
work together.

**Always remember to edit the `src/coffee/app.coffee` file and add your new
modules if the changes don't seem to take effect.**

Router Templates
================

When adding new routes to you app, you should add them to the
`public/templates` directory. These will be directly served and is a good
place to organize all partials and the like.

Configuring Gulp Endpoints
==========================

To customize the source and destination folders, open the `gulp_config.yaml`
file and edit the items. There is a place for **third-party** scripts as well
that has been prepopulated with packages included in this project. Gulp will
find all of your packages listed here and concatenate them and minify them
into a single file `dependencies.min.js` and `dependencies.min.css`
respectively.
