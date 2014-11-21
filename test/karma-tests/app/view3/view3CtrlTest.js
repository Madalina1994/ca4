///**
// * Created by Pranit Anand on 21-11-2014.
// */
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
//'use strict';
//
//describe('myAppRename.viewGetWiki module', function() {
//    var w1 = {"title" : "Bla Blah", "url" :"lars@a.dk","abstract": "xxx", "categories":  [ "newShit" ], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4353}] };
//    beforeEach(module('myAppRename.viewGetWiki'));
//
//    beforeEach(module({
//        WikiFactory: {findWiki: function(){return }}
//
//    }))
//    beforeEach(inject(function($rootScope, $controller) {
//        $scope = $rootScope.$new();
//        $controller('ViewGetWikiCtrl', {$scope: $scope});
//    }));
//    describe('viewGetWiki controller', function(){
//
//        it('should ....', inject(function($controller) {
//            //spec body
//            var viewGetCategoriesCtrl = $controller('ViewGetWiki');
//            expect(viewGetCategoriesCtrl).toBeDefined();
//        }));
//
//    });
//});