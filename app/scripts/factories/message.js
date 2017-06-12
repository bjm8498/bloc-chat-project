( function () {
    
  function Message ($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    Message.getByRoomId = function (roomId) {
        console.log('Linked.');
        console.log(messages.equalTo(roomId));
        //return $firebaseArray(ref.orderByChild('messages').equalTo(roomId));//
        return messages.equalTo(roomId);
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();