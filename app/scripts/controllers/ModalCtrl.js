( function () {
    
    
    function ModalCtrl (modal) {
        this.modal = modal;
        

    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['modal', ModalCtrl]);
})();