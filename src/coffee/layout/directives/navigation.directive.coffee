(() ->
    navigation = () ->
        'ngInject'
        templateUrl: 'public/templates/layout/navigation.html'
        replace: false
        transclude: false
        restrict: 'E'
        scope: {}
        link: (scope, elem, attrs) ->
            return

    angular
    .module 'app.layout.directives'
    .controller 'navigation', navigation
)()
