'use strict';

angular.module('myAppRename.viewGetWiki', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/getWiki', {
            templateUrl: 'app/view3GetWiki/view3.html',
            controller: 'ViewGetWikiCtrl'
        })
            .when('/details/:title', {
                templateUrl: 'app/view3GetWiki/wikiDetails.html',
                controller: 'ViewGetWikiCtrl'
            })
            .when('/categories/:cats', {
                templateUrl: 'app/view3GetWiki/wikiObjects.html',
                controller: 'ViewGetWikiCtrl'
            });
    }])
    .controller('ViewGetWikiCtrl', ['$scope', '$http', 'WikiFactory', '$routeParams', function ($scope, $http, WikiFactory, $routeParams) {
        $scope.predicate = "-name";
//        $scope.wikiList=Wikifactory.getWiki();
        $scope.findWiki = function () {
            var title = $scope.searchTitle;
            WikiFactory.findWiki(title)
                .success(function (data, status, headers, config) {

                    $scope.wikifound = data;
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });
        }

        $scope.getWiki = function (title) {

            // WikiFactory.getWiki(title)
            $http({
                method: 'GET',
                url: 'api/wiki/getWiki/' + title
            })
                .success(function (data, status, headers, config) {
                    $scope.wiki = data;
                    console.log(data);
                    console.log('lalal' + data);
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });
        }

        $scope.getWiki($routeParams.title);

        $scope.getWiksByCat = function (cats) {

            $http({
                method: 'GET',
                url: 'api/cat/getWikibyCat/' + cats
            })
                .success(function (data, status, headers, config) {
                    $scope.gotWikis = data;
                })
                .error(function (data, status, headers, config) {
                    $scope.error = data;
                })
        }
        $scope.getWiksByCat($routeParams.cats);


    }]);


