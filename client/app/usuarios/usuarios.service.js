function usuariosService($resource,API){
	return $resource(API+'/api/usuarios/:id',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		},
		getEmpleados:{
			url:API+'/api/usuarios/empleados',
			isArray:true
		}

	})
}

angular.module('jetSkyApp')
.factory('usuariosService',usuariosService);