( function () {
    
    
    function ModalCloseSubmitCtrl ($uibModalInstance, Room) {
        
        
        var controller = this;
        
        this.submit = function() {
            console.log("submitted!");
            console.log(controller.roomName);
            Room.add(controller.roomName);
            $uibModalInstance.close();
            };
        
        
        this.close = function() {
            console.log("Closed successfully.")
            $uibModalInstance.dismiss('cancel');
            };
            
        
    }
    
    
    angular
        .module('blocChat')
        .controller('ModalCloseSubmitCtrl', ['$uibModalInstance', 'Room', ModalCloseSubmitCtrl]);
})();