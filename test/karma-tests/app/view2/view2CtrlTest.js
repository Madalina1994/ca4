////describe('myAppRename.view2GetCategories view2Ctrl', function() {
////
////  describe('myController', function() {
////    var $scope;
////
////    beforeEach(module('myAppRename.viewGetCategories'));
////
////    //Mocks for the test
////    beforeEach(module({
////      InfoFactory: {
////        getInfo: function() {return  "Factory"; }
////      },
////      InfoService: {
////        getInfo: function() {return  "Service"; }
////      }
////    }));
////
////    beforeEach(inject(function($rootScope, $controller) {
////      $scope = $rootScope.$new();
////      $controller('View2Ctrl', {$scope: $scope});
////    }));
////
////    it('Should have the value Factory', function () {
////      expect($scope.infoFactory).toBe('Factory');
////    });
////
////    it('Should have the value Service', function () {
////      expect($scope.infoService).toBe('Service');
////    });
////  });
////});
//
//
//
//'use strict';
//
//describe('myAppRename.viewGetCategories module', function() {
//
//  beforeEach(module('myAppRename.viewGetCategories'));
//
//  beforeEach(module({
//    WikiFactory: {findTitle: function(){return }}
//
//  }))
//  beforeEach(inject(function($rootScope, $controller) {
//    $scope = $rootScope.$new();
//    $controller('ViewGetCategoriesCtrl', {$scope: $scope});
//  }));
//  describe('viewGetCategories controller', function(){
//
//    it('should ....', inject(function($controller) {
//      //spec body
//      var viewGetCategoriesCtrl = $controller('ViewGetCategoriesCtrl');
//      expect(viewGetCategoriesCtrl).toBeDefined();
//    }));
//
//  });
//});