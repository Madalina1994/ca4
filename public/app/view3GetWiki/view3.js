/*'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3GetWiki', {
    templateUrl: 'app/view3GetWiki/view3GetWiki.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'api/user'
    }).
      success(function (data, status, headers, config) {
        $scope.users = data;
      }).
      error(function (data, status, headers, config) {
        $scope.error = data;
      });
});

*/

'use strict';

angular.module('myAppRename.viewGetWiki', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/getWiki', {
        templateUrl: 'app/view3GetWiki/view3.html',
        controller: 'ViewGetWikiCtrl'
      });
    }])
    .controller('ViewGetWikiCtrl', ['$scope', 'WikiFactory', function ($scope, WikiFactory) {
        $scope.predicate = "-name";
         $scope.findWiki= function(){
             var title = $scope.searchTitle;
        WikiFactory.findWiki(title)
        .success(function (data, status, headers, config) {
        console.log('lalal' + title);

            $scope.wikifound = data;
        }).
            error(function (data, status, headers, config) {
                $scope.error = data;
            });
    }
      WikiFactory.getWiki()
          .success(function (data, status, headers, config) {
            $scope.wiki = data;
          }).
          error(function (data, status, headers, config) {
            $scope.error = data;
          });

        //WikiFactory.getTitles()
        //    .success(function (data, status, headers, config) {
        //        $scope.titles = data;
        //    }).
        //    error(function (data, status, headers, config) {
        //        $scope.error = data;
        //    });



    }]);


