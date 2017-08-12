'use strict';

angular.module('videoclubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-update', {
        url: '/usuarios-update',
        template: '<usuarios-update></usuarios-update>'
      });
  });
