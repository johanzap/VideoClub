'use strict';

describe('Component: LoginComponent', function () {

  // load the controller's module
  beforeEach(module('videoclubApp'));

  var LoginComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    LoginComponent = $componentController('login', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
