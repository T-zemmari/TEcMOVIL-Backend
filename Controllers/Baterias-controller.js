const Bateria = require('../Model/Bateria');





class BateriaController{


    // Obtener todas las baterias //

   async getAllBateriasList(baterias){

      return  Bateria.find(baterias)
   }
  
   //Obtener a una bateria mediante su id //

   async getBateriaById(id){

    return Bateria.findById(id);
   }

   // Guardar a un bateria en la base de datos //

   async CreateBateria(bateria){

   return Bateria.create(bateria);
   }

   // Modificar o actualizar los datos de la bateria.
  
   async updateBateria(id, bateria) {
    return Bateria.findByIdAndUpdate(id, bateria);
};
 
  // Borrar a una bateria de la base de datos //

   async destroy(id) {
    return Bateria.findByIdAndRemove(id);
};




}

let bateriaController = new BateriaController();
module.exports= bateriaController;