(() ->
    ##
    # @ngInject
    ##
    routes = ($stateProvider, $urlRouterProvider) ->
        $urlRouterProvider.otherwise '/frontend-goodness'

        $stateProvider
        .state 'index', {
            url: "/frontend-goodness",
            controller: 'IndexController as vm',
            templateUrl: 'frontend-goodness/public/templates/layout/index.html',
        }

    angular.module('app.routes').config(routes)
)()
