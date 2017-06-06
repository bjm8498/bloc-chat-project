( function () {
    
    function MessageCtrl (Message) {
        
        this.mes = Message;
    }
    
    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();