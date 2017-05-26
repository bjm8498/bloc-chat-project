( function () {
    
    
    function ModalCloseSubmitCtrl ($uibModal) {
        
        
        this.submit = function() {
            console.log("submitted!")
            var mobalInstance = $uibModal.submit({
                templateUrl : '/templates/modals.html',
                controller: 'ModalCloseSubmitCtrl',
                controllerAs: 'modal'
            });
        
        this.close = function() {
            console.log("Open sesame.")
            var mobalInstance = $uibModal.close({
                templateUrl : '/templates/modals.html',
                controller: 'ModalCloseSubmitCtrl',
                controllerAs: 'modal'
            });
            
        
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCloseSubmitCtrl', ['$uibModal', ModalCloseSubmitCtrl]);
})();