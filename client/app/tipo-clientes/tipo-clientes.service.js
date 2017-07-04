'use strict';

function tipoClientesService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource(API+'/api/tipo_clientes/:id',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		}

	})
}

angular.module('jetSkyApp')
  .factory('tipoClientesService', tipoClientesService);
