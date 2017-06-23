( function () {
    
  function addUserCtrl ($uibModalInstance, $cookies) {
      
      var scope = this;
      
      scope.submit = function(userName) {
            console.log(this);
            $cookies.put('username', userName);
            if($cookies.get('username')) {
                alert("Hello " + userName);
                
            } else {
                alert('Enter a username!');
            }
            }
    scope.finish = function () {
        if($cookies.get('username')) {
            $uibModalInstance.dismiss('Done');
        }
    }
        
  }  
   
    angular
        .module('blocChat')
        .controller('addUserCtrl',['$uibModalInstance', '$cookies',  addUserCtrl]);
    
})();