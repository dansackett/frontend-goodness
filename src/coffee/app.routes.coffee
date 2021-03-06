(() ->
    routes = ($stateProvider, $urlRouterProvider) ->
        'ngInject'
        $urlRouterProvider.otherwise '/'

        $stateProvider
        .state 'index', {
            url: "/",
            controller: 'IndexController as vm',
            templateUrl: 'public/templates/layout/index.html',
        }

        return

    angular.module('app.routes').config(routes)
)()
