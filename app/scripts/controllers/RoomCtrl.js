(function () {
    
    function RoomCtrl (Room, Message) {
        
        this.rooms = Room.all;
        
        this.messages = null;
        
        this.mes = function (selectedRoom) {
            
            this.messages = Message.getByRoomId(selectedRoom.$id);
        
        };
        
    }
    
   
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();