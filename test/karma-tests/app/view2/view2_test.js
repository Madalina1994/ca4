///**
// * Created by Pranit Anand on 20-11-2014.
// */
//describe('myAppRename.viewGetCategories ViewGetCategoriesCtrl', function() {
//
//    var scope, httpBackendMock, ctrl;
//    var categories = [
//        {"title" : "Bla Blah", "url" :"lars@a.dk","abstract": "xxx", "categories":  [ "newCategory" ], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4353}] },
//        {"title" : "hallo", "url" :"lars@a.dk","abstract": "hxfgx", "categories": [ "newCategory2", "copy"], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4653}] }
//    ];
//    beforeEach(module('myAppRename.viewGetCategories'));
//
//    beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
//        httpBackendMock = $httpBackend;
//        httpBackendMock.expectGET('api/wiki/categories').
//            respond(categories);
//        scope = $rootScope.$new();
//        ctrl = $controller('ViewGetCategoriesCtrl', {$scope: scope});
//    }));
//
//    it('Should fetch two names ', function () {
//        expect(scope.categories).toBeUndefined();
//        httpBackendMock.flush();
//        expect(scope.categories.length).toEqual(2);
//    });
//
//    it('Should fetch Lars and Henrik', function () {
//        expect(scope.users).toBeUndefined();
//        httpBackendMock.flush();
//        expect(JSON.stringify(scope.users)).toEqual(JSON.stringify(users));
//    });
//
//});