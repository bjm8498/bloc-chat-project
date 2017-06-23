( function () {
    
  function Message ($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    Message.getByRoomId = function (roomId) {
        
        var filterdMessage = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        
        return filterdMessage;
    }
    
    Message.send = function (newMessage) {
        
        messages.$add(newMessage);
    }
    
    Message.send = function (newMessage) {
        
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();