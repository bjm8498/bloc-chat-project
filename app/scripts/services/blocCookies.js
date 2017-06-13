( function () {
    
  function BlocChatCookies ($cookies, $uibModal) {
      
    var currentUser = $cookies.get('username');
      
    if (!currentUser || currentUser === '') {
        
      $uibModal.open({
                templateUrl: '',
                controller: '',
                controllerAs: ''
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();