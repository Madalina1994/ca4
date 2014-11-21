'use strict';
angular.module('myAppRename.viewGetCategories', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/getCategories', {
            templateUrl: 'app/view2GetCategories/view2.html',
            controller: 'ViewGetCategoriesCtrl'
        });
    }])
    .controller('ViewGetCategoriesCtrl', ['$scope', '$http', 'WikiFactory', function ($scope, $http, WikiFactory) {
        var categories = [];
        $scope.predicate = "-name";

        $scope.getWikisWithCategory = function (category) {
            //WikiFactory.getWikisWithCategory(title)
            $http({
                method: 'GET',
                url: 'api/wiki/' + category
            })
                .success(function (data, status, headers, config) {
                    $scope.wikifound = data;
                    console.log("blabla : " + $scope.wikifound)
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });
        }

        $scope.showCategorywithLetter = function (letter) {
            console.log("blaval : " + letter);
            $scope.categories = categories.filter(function (category) {
                if (category != null) {
                    return category.charAt(0).toLowerCase() == letter;
                }
                return false;
            })
        }
        $scope.getCategories = function () {
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
