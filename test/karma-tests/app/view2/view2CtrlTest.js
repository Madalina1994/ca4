
'use strict';

describe('myAppRename.viewGetCategories module', function() {

  beforeEach(module('myAppRename.viewGetCategories'));

  //beforeEach(module({
  //  WikiFactory: {findTitle: function(){return }}
  //
  //}))
  var ctrl;
  beforeEach(inject(function($rootScope, $controller, _WikiFactory_) {
    var scope = $rootScope.$new();
    ctrl = $controller('ViewGetCategoriesCtrl', {
          $scope: scope,
          WikiFactory: _WikiFactory_
        }
    );
  }));
  describe('viewGetCategories controller', function(){

    it('should ....', function() {
      expect(ctrl).toBeDefined();

    });

  });
});