(() ->
    ##
    # @ngInject
    ##
    routes = ($stateProvider, $urlRouterProvider) ->
        $urlRouterProvider.otherwise '/'

        $stateProvider
        .state 'index', {
            url: "/",
            controller: 'IndexController as vm',
            templateUrl: 'public/templates/layout/index.html',
        }

    angular.module('app.routes').config(routes)
)()
