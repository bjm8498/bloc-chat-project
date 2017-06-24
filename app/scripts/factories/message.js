( function () {
    
  function Message ($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    Message.getByRoomId = function (roomId) {
        
        var filterdMessage = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        
        return filterdMessage;
    }
    
    
    Message.send = function (newMessage) {
        console.log('I am here.');
        messages.add({
            username: $cookies.get('username'),
            content: newMessage.toString(),
            roomId: Message.getByRoomId(roomId),
            sentAt: new Date().toUTCString()
        });
    
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();