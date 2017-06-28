( function () {
    
    
    function sendMessageCtrl ($uibModal) {
        
        
        this.open = function() {
            
            var modal = $uibModal.open({
                templateUrl : '/templates/message.html',
                controller: 'RoomCtrl',
                controllerAs: 'sendMessage'
            });
            
        
        }
    }
    
    angular
        .module('blocChat')
        .controller('sendMessageCtrl', ['$uibModal', sendMessageCtrl]);
})();