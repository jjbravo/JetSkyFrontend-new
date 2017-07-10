function alquileresService($resource,API){
	return $resource(API+'/api/alquileres/:id',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		}
	})
}

angular.module('jetSkyApp')
.factory('alquileresService',alquileresService);