'use strict';

class NavbarController {
  /*constructor(authService){
    this.authService = authService;
    this.mostrar = true;
  }
  ocultarMenu(){
    if(this.mostrar == false){
      this.mostrar = true;
    }else{
      this.mostrar = false;
    }
  }*/

  ocultarCollapse(){
    $('.navbar-collapse').collapse('hide');
  }
}

angular.module('videoclubApp')
  .controller('NavbarController', NavbarController);
