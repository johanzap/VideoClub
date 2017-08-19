'use strict';

function authService($auth,$state) {
	var Auth = {
    login: login,
		isAuthenticated:isAuthenticated,
		logout:logout,
		isAdmin: isAdmin,
		isUser: isUser
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
		if($auth.isAuthenticated()){ //$auth
			$auth.logout()
			.then(response =>{
				$state.go('main');
				console.log('Ha cerado sesion');
			})
		}
	}

	function isAuthenticated(){
		if($auth.isAuthenticated()){ //isAuthenticated()
			return true;
		}else{
			return false;
		}
	}

	function isAdmin(){
		if(Auth.isAuthenticated()){
			if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
				return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function isUser(){
	if(Auth.isAuthenticated){
		if($auth.getPayload().roles.indexOf("USER") !== -1){
			return true;
	}else{
		return false;
	}
}else{
	return false;
}
}


  return Auth;
}
authService.inject = ['$auth','$state'];
angular.module('videoclubApp')
  .factory('authService', authService);
