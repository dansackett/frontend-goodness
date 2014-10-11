    ##
    # @ngInject
    ##
    Test = () ->
        link = (scope, elem, attrs) ->

        directive =
            restrict: 'E'
            scope: {}
            link: link
            templateUrl: 'partials/test.html'

        return directive

    angular.module('myapp').directive 'test', Test
