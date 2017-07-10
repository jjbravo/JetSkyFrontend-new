'use strict';

(function(){

class AlquileresComponent {
  constructor(motosAcuaticasService,planesService ,tipoClientesService,usuariosService,alquileresService) {
    this.motosAcuaticasService = motosAcuaticasService;
    this.planesService = planesService;
    this.tipoClientesService = tipoClientesService;
    this.usuariosService = usuariosService;
    this.alquileresService = alquileresService;
    this.alquiler = {
      idMotoAcuatica:{
        id:null
      }
    }
  }

  $onInit(){
    this.usuariosService.getEmpleados().$promise
    .then(response => {
      this.empleados = response;
    })
     .catch(err => console.error(err));

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
    this.alquileresService.save(this.alquiler).$promise
    .then(response => {
      console.log("Alquiler guardado...",response);
      this.message = "Se ha registrado el alquiler correctamente";
      this.alquiler = {
        idMotoAcuatica:{
          id:null
        }
      };
    })
    .catch(err => console.error(err));
  }

  selectedPlan(){
    for (var i = 0; i < this.planes.length; i++) {
      if(this.planes[i].id == this.alquiler.idPlan.id){
        this.itemPlan = this.planes[i];
      }
    } 

    this.alquiler.totalPagar = this.itemPlan.valor;
    
    this.calcularDescuento();
  }
  selectedMoto(item){
    this.alquiler.idMotoAcuatica.id = item.id;
    this.selectMoto = item;
  }

  calcularDescuento(){
    if(this.alquiler.idTipoCliente.id == 1){

      this.descuento = this.itemPlan.valor * this.itemPlan.porcentajeDescuento / 100; 
      this.alquiler.totalPagar = this.alquiler.totalPagar - this.descuento;
    }
  }


}

angular.module('jetSkyApp')
  .component('alquileres', {
    templateUrl: 'app/alquileres/alquileres-create/alquileres.html',
    controller: AlquileresComponent,
    controllerAs: 'vm'
  });

})();
