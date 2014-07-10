'use strict'

angular = require 'angular'

MainController = require './controllers/MainController'

app = angular.module 'mainapp', []

app.controller 'mainController', MainController
