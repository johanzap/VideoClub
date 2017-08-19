'use strict';
(function(){

class UsuariosCreateComponent {
  constructor(usuariosService, $state,tiposDocumentosService) {
    this.usuariosService = usuariosService;
    this.tiposDocumentosService = tiposDocumentosService;
    this.$state = $state;
    this.usuario = {
      activo:true
    };
    this.validarNumeroDocumento = false;
    this.validarEmail = false;
  }
  $onInit(){
    this.tiposDocumentosService.query().$promise
    .then(response =>{
      this.tiposDocumentos = response;
    })
    .catch(err =>{
      console.log(err);
    })
  }
  createUser(){
    console.log(this.usuario);
    console.log("{numeroDocumento: "+this.usuario.numDocumento+"}");
  	this.usuariosService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
        this.$state.go('usuarios-list');
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }
  validarNumDocumento(){
    console.log("{numeroDocumento: "+this.usuario.numDocumento+"}");
    this.usuariosService.query({numDocumento:this.usuario.numDocumento}).$promise
    .then(response =>{
      console.log("Valida ",response);
      this.validarNumeroDocumento = true;
      console.log(response.length);
      if(this.usuario.numDocumento == undefined || response.length <= 0){
        this.validarNumeroDocumento = false;
      }
    })
    .catch(err =>{
      console.log("No existe ", err);
    })
  }
  validarCorreo(){
    console.log("{email: "+this.usuario.email+"}");
    this.usuariosService.query({email:this.usuario.email}).$promise
    .then(response =>{
      console.log("Valida ",response);
      this.validarEmail = true;
      console.log(response.length);
      if(this.usuario.email == undefined || response.length <= 0){
        this.validarEmail = false;
      }
    })
    .catch(err =>{
      console.log("No existe ", err);
    })
  }
}

angular.module('videoclubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs:'vm'
  });

})();
