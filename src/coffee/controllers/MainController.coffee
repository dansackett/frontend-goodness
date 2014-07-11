'use strict'

class MainController
    @$inject: ['$scope', '$http']

    constructor: (@scope, @http) ->
        @scope.appName = 'Frontend Goodness'
        @scope.changeAppName = @changeAppName

    changeAppName: =>
        @scope.appName = 'Changed you!'

module.exports = MainController
