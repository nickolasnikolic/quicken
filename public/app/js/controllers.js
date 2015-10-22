blindApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

blindApp.controller('HomeController', ['$scope', '$state', '$http', '$sce', 'globals', function($scope, $state, $http, $sce, globals) {
  document.title = 'blindworm - home'; //set the page title

  $scope.getItems = function( keywords ){
      $http.get('/api/az/' + keywords)
          .then(function(response){
            console.log(response.data);
            $scope.items = response.data.ItemSearchResponse.Items;
          });
  };

}])