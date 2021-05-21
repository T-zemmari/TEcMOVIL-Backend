const Repuesto = require('../Model/Repuesto');


class RepuestoController {

  //------------- Listar todos los Repuestos---------------//

  async ListAllRepuestos() {

    return await Repuesto.find();
  }

  //-------------Listar solo un accessorio-----------------//  

  async GetOneRepuesto(id) {


    return await Repuesto.findById(id);
  }

  //----------Guardar un Repuesto en la base de datos---//  

  async StoreRepuesto(myRepuesto) {

    return await Repuesto.create(myRepuesto);
  }


  //---------Modificar los datos del producto-------------//  

  async updateRepuesto(id, Repuesto) {
    return await Repuesto.findByIdAndUpdate(id, Repuesto)
  }







}

let repuestoController = new RepuestoController();
module.exports = repuestoController;