//describe('myAppRename.view3GetWiki ViewGetWikiCtrl', function() {
//
//  var scope, httpBackendMock, ctrl;
//  var titles = [
//    {"title" : "Bla Blah", "url" :"lars@a.dk","abstract": "xxx", "categories":  [ "newShit" ], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4353}] },
//    {"title" : "hallo", "url" :"lars@a.dk","abstract": "hxfgx", "categories": [ "newShit2", "copy"], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4653}] };
//  ];
//  beforeEach(module('myAppRename.view3GetWiki'));
//
//  beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
//    httpBackendMock = $httpBackend;
//    httpBackendMock.expectGET('/wiki/findWiki/hallo').
//      respond(users);
//    scope = $rootScope.$new();
//    ctrl = $controller('View3Ctrl', {$scope: scope});
//  }));
//
//  it('Should fetch two names ', function () {
//    expect(scope.users).toBeUndefined();
//    httpBackendMock.flush();
//    expect(scope.users.length).toEqual(2);
//  });
//
//  it('Should fetch Lars and Henrik', function () {
//    expect(scope.users).toBeUndefined();
//    httpBackendMock.flush();
//    expect(JSON.stringify(scope.users)).toEqual(JSON.stringify(users));
//  });
//
//});