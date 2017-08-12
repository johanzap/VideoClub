'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }
  $onInit(){
    this.usuariosService.query().$promise
    .then(response =>{
      this.usuarios = response;
      console.log(this.usuarios);
    })
    .catch(err =>{
      console.log(err);
    })
  };
}

angular.module('videoclubApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
