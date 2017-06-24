( function () {
    
    
    function ModalCtrl ($uibModal) {
        
        
        this.open = function() {
            
            var mobalInstance = $uibModal.open({
                templateUrl : '/templates/modals.html',
                controller: 'ModalCloseSubmitCtrl',
                controllerAs: 'modal',
                backdrop: 'static',
                keyboard: false
            });
            
        
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();