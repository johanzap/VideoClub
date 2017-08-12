'use strict';

(function() {

  class MainController {

    constructor() {
    }

    $onInit() {
    }
  }

  angular.module('videoclubApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
