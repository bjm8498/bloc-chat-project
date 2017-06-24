( function () {
    
    function MessageCtrl (Message) {
        
        this.mes = Message.send;
    }
    
    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();