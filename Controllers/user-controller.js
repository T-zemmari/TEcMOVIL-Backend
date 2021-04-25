const User = require('../Model/user-model');
const bcrypt = require('bcryptjs')




class UserController{


    // Obtener todos los usuarios //

   async getAllUsers(users){

      return  User.find(users)
   }
   async getuserByEmail(email){
       return User.findOne({email})
   }

   //Obtener a un usuario mediante su id //

   async getUserById(id){

    return User.findById(id);
   }

   // Guardar a un usuario en la base de datos //

   async CreateUser(user){

   console.log(user);
   user.password = await bcrypt.hashSync(user.password,10);
    
   return User.create(user);
   }

   // Modificar o actualizar los datos del usuario.
  
   async updateUser(id, user) {
    return User.findByIdAndUpdate(id, user);
};
 
  // Borrar a un usuario de la base de datos //

   async destroy(id) {
    return User.findByIdAndRemove(id);
};




}

let userController = new UserController();
module.exports= userController;