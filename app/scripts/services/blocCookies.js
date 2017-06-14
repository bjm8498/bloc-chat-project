( function () {
    
  function BlocChatCookies ($cookies, $uibModal) {
      
    var currentUser = $cookies.get('username');
      
    if (!currentUser || currentUser === '') {
        
      $uibModal.open({
                templateUrl: '/templates/newuser.html',
                controller: 'addUserCtrl',
                controllerAs: 'addUser'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();