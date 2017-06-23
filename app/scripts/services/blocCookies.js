( function () {
    
  function blocCookies ($cookies, $uibModal) {
      
    var currentUser = $cookies.get('username');
    console.log('currentuser:', currentUser);  
    if (!currentUser || currentUser === '') {
        
      $uibModal.open({
                templateUrl: '/templates/newuser.html',
                controller: 'addUserCtrl',
                controllerAs: 'addUser',
                backdrop: 'static',
                keyboard: false
      })
    }
  }
 
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', blocCookies]);
})();