(function () {
    
    function config ($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
        
            .state('room', {
                url:'/',
                controller:'RoomCtrl as rooms',
                template: '/Templates/rooms.html',
        })
    }
    
    
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();