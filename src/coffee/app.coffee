(() ->
    angular.module 'myapp', []

    #= require services.coffee
    #= require filters.coffee
    #= require controllers.coffee
    #= require directives.coffee

    # -------------------------------------------------------------------------

    ##
    # @ngInject
    ##
    Config = () ->

    angular.module('myapp').config Config
)()
