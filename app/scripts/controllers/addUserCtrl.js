( function () {
    
  function addUserCtrl ($uibModalInstance, $cookies) {
      
      var scope = this;
      
      scope.submit = function () {
            console.log(this);
            $cookies.put('username', scope.username);
            if($cookies.get('username')) {
                alert("Hello " + scope.username);
                $uibModalInstance.dismiss('Done');
            } else {
                alert('Enter a username!');
            }
            }

        
  }  
   
    angular
        .module('blocChat')
        .controller('addUserCtrl',['$uibModalInstance', '$cookies',  addUserCtrl]);
    
})();