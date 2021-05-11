const router = require("express").Router();
const RepuestoController=require('../Controllers/repuesto-Controller');
const upload = require('../libs/Storage.js');
const Repuesto= require('../Model/Repuesto');



  //------------- Listar todos los Repuestos---------------//

   router.get('/',async (req,res)=>{

       try{
           

           res.status(200).json(await RepuestoController.ListAllRepuestos())
       }catch(error){
           res.status(500).json({
               error:error.message
           })
       }
        

   });

   //-------------Listar solo un Repuesto-----------------//  

   router.get('/',async (req,res)=>{

    try{
         let id= req.body._id;

        res.status(200).json(await RepuestoController.GetOneRepuesto(id))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});


//----------Guardar un Repuesto en la base de datos---//  

   router.post('/',upload.fields([{name:'image1'},{name:'image2'}]),async (req,res)=>{

      try{


          const {marca,modelo,pantalla,bateria,software,conectorDeCarga,microfono,auricular,buzz,image1,image2} = req.body;
          const myRepuesto = Repuesto({
            marca,modelo,pantalla,bateria,software,conectorDeCarga,microfono,auricular,buzz,image1,image2
          })
  

          
          if(req.files){

            const filename1=req.files.image1[0].filename;
            const filename2=req.files.image2[0].filename;
         
            myRepuesto.setUrl(filename1,filename2);
            
          }
    
        const repuesto = await RepuestoController.StoreRepuesto(myRepuesto);
        const status = "Success";
        return res.status(200).json({ status, repuesto });
     
     
        

      }catch(error){
          res.status(500).json({
              error:message.error
          })
      }


   })

    //---------Modificar los datos del Repuesto-------------//  


   
   router.put('/:id/update',async (req,res)=>{

    try{
         let id= req.body._id;
         res.status(200).json(await RepuestoController.updateAccessory(id,req.body))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});

   module.exports = router;
