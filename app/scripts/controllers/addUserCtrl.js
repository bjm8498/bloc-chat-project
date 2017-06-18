( function () {
    
  function addUser ($uibModalInstance, userName) {
      
      var scope = this;
      
      this.submit = function() {
            userName.add(scope.username);
            $uibModalInstance.close();
            };
        
        
      this.close = function() {
            $uibModalInstance.dismiss('cancel');
            };
  }  
   
    angular
        .module('blocChat')
        .controller('addUser',['$uibModalInstance', 'userName', addUser]);
    
})();