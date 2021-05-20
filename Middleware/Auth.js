const login = require('../Routers/Login-Router');
const jwt = require('jsonwebtoken');
const secret = 'Tarek Es el Mejor ';



const auth =  (req,res,next)=>{

    try{
        
      let token =  req.headers.authorization.split(' ')[1];
    
      let payload=  jwt.verify(token,secret);
      
      if(payload.userId != req.params.id){
          throw new Error('No se ha conseguido la verificacion')
      }
      return next();

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
    
}




module.exports = auth;