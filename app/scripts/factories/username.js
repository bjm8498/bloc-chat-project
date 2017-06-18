( function () {
    
  function userName ($firebaseArray) {
    var userName = {};
    var ref = firebase.database().ref().child("messages");
    var name = ref.child('username');
      
      
    
    
   userName.addUser = function (user) {
       
       name.$add($firebaseArray(name));
   }; 
    

    return userName;
  }

  angular
    .module('blocChat')
    .factory('userName', ['$firebaseArray', userName]);
})();