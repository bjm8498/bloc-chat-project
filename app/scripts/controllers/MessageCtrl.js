( function () {
    
    function MessageCtrl (Message, $cookies) {
        
        this.mes = Message.send;
    }
    
    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', '$cookies', MessageCtrl]);
})();