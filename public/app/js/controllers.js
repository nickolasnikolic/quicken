blindApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

blindApp.controller('HomeController', ['$scope', '$state', '$http', '$sce', 'globals', function($scope, $state, $http, $sce, globals) {
  document.title = 'blindworm - home'; //set the page title

  $http.get('/api/equations')
      .then(function(response){
        $scope.equations = response.data;
      });

  $scope.submitEq = function( obj ){
    $http.post('/api/equation', obj)
        .then(function(){
            $http.get('/api/equations')
                .then(function(response){
                    $scope.equations = response.data;
                });
        });
  };

}])