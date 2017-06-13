( function () {
    
    
    function ModalCtrl ($uibModal) {
        
        
        this.open = function() {
            
            var mobalInstance = $uibModal.open({
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