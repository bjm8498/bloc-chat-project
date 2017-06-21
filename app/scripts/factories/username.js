( function () {
    
  function userName ($firebaseArray) {
    var userName = {};
    var ref = firebase.database().ref().child("blocChatCurrentUser");
    var name = ref.child('username');
      
      
    
    
   userName.addUser = function (user) {
       
       user.$add($firebaseArray(ref));
   }; 
    

    return userName;
  }

  angular
    .module('blocChat')
    .factory('userName', ['$firebaseArray', userName]);
})();