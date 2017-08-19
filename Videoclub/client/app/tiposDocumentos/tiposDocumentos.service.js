  'use strict';

  function tiposDocumentosService(API,$resource) {
    return $resource(API+'/tipos_documentos/:id',{
      id:'@id'
    },{
      update:{
        method:'PUT'
      }
    });
  }

  angular.module('videoclubApp')
    .factory('tiposDocumentosService', tiposDocumentosService);
