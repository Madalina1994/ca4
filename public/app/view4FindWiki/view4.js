/**
 * Created by mady on 18.11.2014.
 */
'use strict';

angular.module('myAppRename.viewFindWiki', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wiki', {
            templateUrl: 'app/view4FindWiki/view4.html',
            controller: 'ViewFindWikiCtrl'
        });
    }])
    .controller('ViewFindWikiCtrl', ['$scope', 'WikiFactory', function ($scope, WikiFactory) {
        $scope.predicate = "-name";

        WikiFactory.findWiki(searchString)
            .success(function (data, status, headers, config) {
                $scope.wikis = data;
            }).
            error(function (data, status, headers, config) {
                $scope.error = data;
            });
    }]);
