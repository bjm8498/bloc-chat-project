( function () {
    
  function addUserCtrl ($uibModalInstance, userName) {
      
      var scope = this;
      
      this.submit = function() {
//          console.log('clicked.')
//            userName.add(scope.username);
            $uibModalInstance.close();
            };
        
        
      this.close = function() {
            $uibModalInstance.dismiss('cancel');
            };
  }  
   
    angular
        .module('blocChat')
        .controller('addUserCtrl',['$uibModalInstance', 'userName', addUserCtrl]);
    
})();