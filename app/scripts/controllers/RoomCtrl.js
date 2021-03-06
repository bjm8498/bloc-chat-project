(function () {
    
    function RoomCtrl (Room, Message, $cookies) {
        
        this.rooms = Room.all;
        
        this.messages = null;
        
        this.currentRoom = null;
                
        this.mes = function (selectedRoom) {
            this.currentRoom = selectedRoom;
            this.messages = Message.getByRoomId(selectedRoom.$id);
        
        };
        
        this.send = function () {
            Message.send({
                content: this.message,
                username: $cookies.get('username'),
                roomId: this.currentRoom.$id
            });
            this.message = '';
        }
        
    }
    
   
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message','$cookies', RoomCtrl]);
})();