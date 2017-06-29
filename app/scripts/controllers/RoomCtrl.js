(function () {
    
    function RoomCtrl (Room, Message, $cookies) {
        
        this.rooms = Room.all;
        
        this.messages = null;
        
        this.currentRoom = null;
                
        this.mes = function (selectedRoom) {
            console.log(selectedRoom);
            this.currentRoom = selectedRoom;
            this.messages = Message.getByRoomId(selectedRoom.$id);
        
        };
        
        this.send = function () {
            console.log(this);
            Message.send({
                content: this.message,
                username: $cookies.get('username'),
                roomId: Room.currentRoom.$id
            });
        }
        
    }
    
   
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message','$cookies', RoomCtrl]);
})();