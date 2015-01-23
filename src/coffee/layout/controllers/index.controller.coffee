(() ->
    ##
    # @ngInject
    ##
    IndexController = () ->
        vm = this
        vm.name = 'Index Controller'

        activate = () ->
            return

        activate()
        return

    angular
    .module 'app.layout.controllers'
    .controller 'IndexController', IndexController
)()
