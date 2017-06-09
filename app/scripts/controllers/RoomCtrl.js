(function () {
    
    function RoomCtrl (Room, Message) {
        
        this.rooms = Room.all;
        
        this.mes = function (selectedRoom) {
            console.log(Message.getByRoomId(selectedRoom.$id));
            Message.getByRoomId(selectedRoom.$id);
        
        };
        
    }
    
   
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();