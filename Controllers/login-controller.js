const userController = require('./User-Controller');
const  bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'Tarek Es el Mejor '


class LoginController{




    async validate(passwordCheck,emailCheck){

        let user =  await userController.getuserByEmail(emailCheck);
        let password = user.password;
        let verify = await bycrypt.compare(passwordCheck,password)
         
        if(!verify){
            throw new Error('Contraseña erronea')
        }
        let payload ={
            user:user,
            userId : user.id,
            admin: user.admin,
            createdAt: new Date,
            
        }
         return jwt.sign(payload,secret);
    }
}

let loginController = new LoginController();
module.exports = loginController;