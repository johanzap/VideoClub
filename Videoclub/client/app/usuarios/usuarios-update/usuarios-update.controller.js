'use strict';
(function(){

class UsuariosUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('videoclubApp')
  .component('usuariosUpdate', {
    templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
    controller: UsuariosUpdateComponent
  });

})();
