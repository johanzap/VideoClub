'use strict';

(function(){

class LoginComponent {
  constructor(authService,$auth) {
    this.authService = authService;
    this.$auth = $auth;
    this.error = "";
    this.user = {
      numDocumento:'',
      password:''
    }
  }
  login(){
    this.$auth.login(this.user)
    .then(response =>{
      console.log(response);
    })
    .catch(err =>{
      console.log(this.user);
      if(this.user.numDocumento == '' && this.user.password == ''){
        this.error = "Debe ingresar sus datos";
      }else{
        this.error = err.data;
      }
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
