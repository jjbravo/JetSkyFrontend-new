'use strict';

function planesService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource(API+'/api/planes/:id',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		}

	})

}

angular.module('jetSkyApp')
  .factory('planesService', planesService);
