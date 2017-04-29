(function () {
    
    function config ($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
        
            .state('rooms', {
                url:'/',
                controller:'RoomCtrl as rooms',
                templateUrl: '/Templates/rooms.html'
        });
    }
    
    
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();