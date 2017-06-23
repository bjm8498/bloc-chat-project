( function () {
    
  function userName ($firebaseArray, $cookies) {
    var userName = {};
    var ref = firebase.database().ref().child("messages");
    var name = ref.child('username');
    var fire = $firebaseArray(name);
      
    
    
   userName.addUser = function () {
       
       $cookies.put(name);
   }; 
    

    return userName;
  }

  angular
    .module('blocChat')
    .factory('userName', ['$firebaseArray','$cookies', userName]);
})();