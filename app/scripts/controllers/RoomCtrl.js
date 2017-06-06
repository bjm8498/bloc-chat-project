(function () {
    
    function RoomCtrl (Room, Message) {
        
        this.rooms = Room.all;
        
        this.mes = Message.getByRoomId;
    }
    
   
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();