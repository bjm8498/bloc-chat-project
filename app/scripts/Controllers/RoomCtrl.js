(function () {
    
    function RoomCtrl (Room) {
        
        this.Room = Room;
    }
    console.log(Room.all);
   
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();