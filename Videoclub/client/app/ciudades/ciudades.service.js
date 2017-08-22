'use strict';
function ciudadesService(API,$resource){
  return $resource(API+'/ciudades/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    },
    getCiudades:{
      method:'GET',
      url:API+'/ciudades/find',
      isArray:true
    }
  })
}
angular.module('videoclubApp')
  .factory('ciudadesService', ciudadesService);
