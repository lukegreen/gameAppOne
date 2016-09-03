'use strict';

describe('Service: characterData', function () {

  // load the service's module
  beforeEach(module('gameAppOneApp'));

  // instantiate service
  var characterData;
  beforeEach(inject(function (_characterData_) {
    characterData = _characterData_;
  }));

  it('should do something', function () {
    expect(!!characterData).toBe(true);
  });

});
