( function () {
    
  function Message ($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
      
    Message.getByRoomId = function (roomId) {
        console.log('Linked.')
        ref.orderByChild('messages').equalTo(roomId);
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();