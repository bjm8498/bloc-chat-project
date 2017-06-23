( function () {
    
    
    function sendMessageCtrl ($uibModal, $cookies) {
        
        
        this.open = function() {
            
            var modal = $uibModal.open({
                templateUrl : '/templates/modals.html',
                controller: 'ModalCloseSubmitCtrl',
                controllerAs: 'modal'
            });
            
        
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();