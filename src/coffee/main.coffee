app = angular.module 'barebones', []

app.controller 'mainController',
    class MainCtrl
        @$inject: ['$scope', '$http']

        constructor: (@scope, @http) ->
            @scope.appName = 'Frontend Goodness'
            @scope.changeAppName = @changeAppName

        changeAppName: =>
            @scope.appName = 'Changed you!'
