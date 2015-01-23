(() ->
    ##
    # @ngInject
    ##
    config = ($locationProvider) ->
        $locationProvider.html5Mode true
        $locationProvider.hashPrefix '!'

    angular.module('app.config').config(config)
)()
