( function () {
    
    
    function modal ($uibModal) {
        this.modal = $uibModal;
        
        modal.open = function () {
            $uibModal.open();
        };
        
        modal.close = function () {
            $uibModal.close();
        };
        
        modal.submit = function () {
            $uibModal.submit();
        };
        
        
    }
    
    angular
        .module('blocChat')
        .factory('UIBootstrapCtrl',  ['$uibModal', modal]);
})