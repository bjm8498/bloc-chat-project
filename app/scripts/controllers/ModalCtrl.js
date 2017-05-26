( function () {
    
    
    function ModalCtrl ($uibModal) {
        
        
        this.open = function() {
            console.log("Open sesame.")
            var mobalInstance = $uibModal.open({
                templateUrl : '/templates/modals.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
            
        
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();