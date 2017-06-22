( function () {
    
  function userName ($firebaseArray) {
    var userName = {};
    var ref = firebase.database().ref().child("messages");
    var name = ref.child('username');
    var fire = $firebaseArray(name);
      
    
    
   userName.addUser = function (user) {
       
       fire.$add(user);
   }; 
    

    return userName;
  }

  angular
    .module('blocChat')
    .factory('userName', ['$firebaseArray', userName]);
})();