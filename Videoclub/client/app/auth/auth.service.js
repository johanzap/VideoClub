'use strict';

function authService($auth,$state) {
	var Auth = {
    login: login
  };

  function login(user){
		$auth.login(user)
		.then(response =>{
			$state.go('main');
			console.log('Login realizado correctamente');
		})
		.catch(err =>{
			$state.go('login')
			console.log('Error al loguearse');
		})
  }

  return Auth;
}
authService.inject = ['$auth','$state'];
angular.module('videoclubApp')
  .factory('authService', authService);
