'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }
  $onInit(){
    this.usuariosService.query().$promise
    .then(response =>{
      console.log(response);
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
    controllerAs: 'usuariosListCtrl'
  });

})();
