'use strict';
function departamentosService(API,$resource){
  return $resource(API+'/departamentos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}
angular.module('videoclubApp')
  .service('departamentosService', departamentosService);
