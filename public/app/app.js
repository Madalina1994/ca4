'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppRename', [
    'ngRoute', 'ui.bootstrap',
    'myAppRename.controllers',
    'myAppRename.directives',
    'myAppRename.services',
    'myAppRename.factories',
    'myAppRename.filters',
    'myAppRename.view1',
    'myAppRename.viewGetCategories',
    'myAppRename.viewGetWiki',
    'myAppRename.viewFindWiki'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
