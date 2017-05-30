( function () {
    
    
    function ModalCloseSubmitCtrl ($uibModal, ModalCtrl) {
        
        var modal = ModalCtrl;
        
        this.submit = function() {
            console.log("submitted!")
            $uibModal.submit(modal);
            };
        
        
        this.close = function() {
            console.log("Closed successfully.")
            $uibModal.close({$value: modal});
            };
            
        
    }
    
    
    angular
        .module('blocChat')
        .controller('ModalCloseSubmitCtrl', ['$uibModal', 'ModalCtrl', ModalCloseSubmitCtrl]);
})();