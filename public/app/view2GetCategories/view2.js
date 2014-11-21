///*'use strict';
//
//angular.module('myAppRename.view2', ['ngRoute'])
//
//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view2', {
//    templateUrl: 'app/view2/view2.html',
//    controller: 'View2Ctrl'
//  });
//}])
//
//.controller('View2Ctrl',['$scope','InfoFactory','InfoService', function($scope,InfoFactory,InfoService) {
//    $scope.infoFactory = InfoFactory.getInfo();
//    $scope.infoService = InfoService.getInfo();
//  }]);
//*/
//
//'use strict';
//
//angular.module('myAppRename.viewGetCategories', ['ngRoute'])
//
//    .config(['$routeProvider', function ($routeProvider) {
//        $routeProvider.when('/getCategories', {
//            templateUrl: 'app/view2GetCategories/view2.html',
//            controller: 'ViewGetCategoriesCtrl'
//        });
//    }])
//
//    .controller('ViewGetCategoriesCtrl', ['$scope', 'WikiFactory', function ($scope, WikiFactory) {
//        $scope.predicate = "-name";
//
//        //$scope.getCategories= function() {
//            WikiFactory.getCategories()
//                .success(function (data, status, headers, config) {
//
//                    $scope.categories = data;
//                }).
//                error(function (data, status, headers, config) {
//                    console.log('get categories 1');
//                    $scope.error = data;
//                });
//       // }
//            WikiFactory.getWikiToCategories()
//                .success(function (data, status, headers, config) {
//                    $scope.wikis = data;
//                }).
//                error(function (data, status, headers, config) {
//                    $scope.error = data;
//                });
//$scope.getAllTitles= function(){
//    WikiFactory.getTitles()
//        .success(function (data, status, headers, config) {
//
//            $scope.titles = data;
//        }).
//        error(function (data, status, headers, config) {
//            console.log('get categories 1');
//            $scope.error = data;
//        });
//
//
//}
//
//    }]);


'use strict';
angular.module('myAppRename.viewGetCategories', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/getCategories', {
            templateUrl: 'app/view2GetCategories/view2.html',
            controller: 'ViewGetCategoriesCtrl'
        });
    }])
    .controller('ViewGetCategoriesCtrl', ['$scope', 'WikiFactory', function ($scope, WikiFactory) {
        var categories = [];
        $scope.predicate = "-name";
        $scope.findTitle= function(title){
            WikiFactory.findTitle(title)
                .success(function (data, status, headers, config) {
                    $scope.wikifound = data;
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });
        }
        $scope.showCategorywithLetter = function(letter){
            console.log("blaval : " + letter);
            $scope.categories = categories.filter(function(category){
                if(category!=null) {
                    return category.charAt(0).toLowerCase() == letter;
                }
                return false;
            })
        }
        $scope.getCategories= function() {
            $scope.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
            WikiFactory.getCategories()
                .success(function (data, status, headers, config) {
                    categories = data;
                    $scope.categories = data;
                }).
                error(function (data, status, headers, config) {
                    console.log('get categories 1');
                    $scope.error = data;
                });
        }
        WikiFactory.getWikiToCategories()
            .success(function (data, status, headers, config) {
                $scope.wikis = data;
            }).
            error(function (data, status, headers, config) {
                $scope.error = data;
            });
    }]);
