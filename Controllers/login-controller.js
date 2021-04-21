const router = require('express').Router();
const loginController = require('../Controllers/Login-controller');
const userController = require('../controllers/user-controller');


router.post('/', async (req,res)=>{

      try{
               let password = req.body.password;
              
               let email = req.body.email;
               let token = await loginController.validate(password,email)
               let user = await userController.getuserByEmail(email);
               console.log(user);
               res.status(200).json({token,user});
      }catch(error){
       
          res.status(500).json({message:error.message})
      }
    
        
    })




module.exports = router;









