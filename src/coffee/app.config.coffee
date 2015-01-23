(() ->
    config = ($locationProvider) ->
        'ngInject'
        $locationProvider.html5Mode true
        $locationProvider.hashPrefix '!'

        return

    angular.module('app.config').config(config)
)()
