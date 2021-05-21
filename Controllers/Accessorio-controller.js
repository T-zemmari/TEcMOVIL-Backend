const Accessorio = require('../Model/Accessorio');


class AccessorioController {

  //------------- Listar todos los accessorios---------------//

  async ListAllAccessories(Accessory) {

    return await Accessorio.find(Accessory);
  }

  //-------------Listar solo un accessorio-----------------//  

  async GetOneAccessory(id) {


    return await Accessorio.findById(id);
  }

  //----------Guardar un accessorio en la base de datos---//  

  async StoreAccessory(MyAccessory) {

    return await Accessorio.create(MyAccessory);
  }


  //---------Modificar los datos del producto-------------//  

  async updateAccessory(id, Accessorio) {
    return await Accessorio.findByIdAndUpdate(id, Accessorio)
  }







}

let accessorioController = new AccessorioController();
module.exports = accessorioController;