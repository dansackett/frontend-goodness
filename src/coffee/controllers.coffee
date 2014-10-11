    ##
    # @ngInject
    ##
    MainCtrl = () ->
        vm = this
        vm.hello = 'Hello, world!'
        return

    angular.module('myapp').controller 'MainCtrl', MainCtrl
