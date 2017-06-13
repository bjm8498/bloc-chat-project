( function () {
    
    
    function ModalCloseSubmitCtrl ($uibModalInstance, Room) {
        
        
        var controller = this;
        
        this.submit = function() {
            Room.add(controller.roomName);
            $uibModalInstance.close();
            };
        
        
        this.close = function() {
            $uibModalInstance.dismiss('cancel');
            };
            
        
    }
    
    
    angular
        .module('blocChat')
        .controller('ModalCloseSubmitCtrl', ['$uibModalInstance', 'Room', ModalCloseSubmitCtrl]);
})();