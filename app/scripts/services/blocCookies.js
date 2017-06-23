( function () {
    
  function blocCookies ($cookies, $uibModal) {
      
    var currentUser = $cookies.get('username');
      
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