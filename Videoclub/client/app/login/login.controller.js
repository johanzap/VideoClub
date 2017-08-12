'use strict';

(function(){

class LoginComponent {
  constructor(authService) {
    this.authService = authService;
  }
  login(){
    this.authService.login(this.user);
  }
}
LoginComponent.inject = ['authService'];
angular.module('videoclubApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
