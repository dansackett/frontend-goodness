(() ->
    # Add all large modules here
    angular.module 'app', [
        'app.config',
        'app.routes',
        'app.layout',
    ]

    # Global app module declarations here
    angular.module 'app.routes', ['ui.router']
    angular.module 'app.config', ['ui.bootstrap']

    # This is useful for configuring runtime functions and definitions such as
    # updating HTTP headers for Django, adding values to rootScope, etc.
    run = ($http) ->
        'ngInject'
        return

    angular.module('app').run(run)
)()
