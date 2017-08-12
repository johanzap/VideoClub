'use strict';

class NavbarController {
  constructor(authService){
    this.authService = authService;
  }
}

angular.module('videoclubApp')
  .controller('NavbarController', NavbarController);
