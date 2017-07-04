'use strict';

(function(){

class AlquileresComponent {
  constructor(motosAcuaticasService,planesService ,tipoClientesService) {
    this.motosAcuaticasService = motosAcuaticasService;
    this.planesService = planesService;
    this.tipoClientesService = tipoClientesService;
  }

  $onInit(){
    this.tipoClientesService.query().$promise
    .then(response => {
      this.tipoCliente = response;
    })
    .catch(err => console.error(err));

    this.planesService.query().$promise
    .then(response => {
      this.planes = response;
    })
    .catch(err => console.error(err));

  	this.motosAcuaticasService.query().$promise
  	.then(response => {
  		this.motosAcuaticas = response;
  		console.log("Motos ",this.motosAcuaticas);
  	})
  	.catch(err => console.error(err));
  } // End $onInit()

  rentarMoto(){
    console.log(this.alquiler);
  }
}

angular.module('jetSkyApp')
  .component('alquileres', {
    templateUrl: 'app/alquileres/alquileres.html',
    controller: AlquileresComponent,
    controllerAs: 'vm'
  });

})();
