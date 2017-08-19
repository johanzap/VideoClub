'use strict';

(function() {

  class MainController {

    constructor(authService) {
      this.authService = authService;
    }

    $onInit(){
      console.log("Esta autenticado? "+this.authService.isAuthenticated());
      console.log("Es adiministrador? "+this.authService.isAdmin());
    }
  }

  angular.module('videoclubApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
