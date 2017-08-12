'use strict';

(function(){

class LoginComponent {
  constructor(authService) {
    this.authService = authService;
  }
  login(){
    this.authService.login(this.user).$promise
    .then(response =>{
      console.log(response);
    })
    .catch(err =>{
      console.log(err);
    })
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
