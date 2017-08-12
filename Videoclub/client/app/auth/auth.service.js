'use strict';

function authService($auth,$state) {
	var Auth = {
    login: login,
		isAuthenticated:isAuthenticated,
		logout:logout
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

	function logout(){
		if(Auth.isAuthenticated()){
			$auth.logout()
			.then(response =>{
				$state.go('main');
				console.log('Ha cerado sesion');
			})
		}
	}

	function isAuthenticated(){
		if($auth.isAuthenticated){
			return true;
		}else{
			false
		}
	}

  return Auth;
}
authService.inject = ['$auth','$state'];
angular.module('videoclubApp')
  .factory('authService', authService);
