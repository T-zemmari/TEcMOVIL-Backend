const router = require("express").Router();
const bateriaController=require('../Controllers/Baterias-Controller.js');
const Bateria= require('../Model/Bateria');
const upload = require('../libs/Storage.js');


  //------------- Listar todos los Orders---------------//

   router.get('/',async (req,res)=>{

       try{
           

           res.status(200).json(await bateriaController.getAllBateriasList())
       }catch(error){
           res.status(500).json({
               error:error.message
           })
       }
        

   });

   //-------------Listar solo un orders-----------------//  

   router.get('/:id',async (req,res)=>{

    try{
         let id= req.body._id;

        res.status(200).json(await bateriaController.getBateriaById(id))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});


//----------Guardar un order en la base de datos---//  


router.post('/',upload.fields([{name:'imgUrl'},{name:'image2'}]),async (req,res)=>{

    try{


        const {Model,price,imgUrl,image2} = req.body;
        const MyBatery = Bateria({
            Model,price,imgUrl,image2
        })

        
        if(req.files){

          const filename1=req.files.imgUrl[0].filename;
          const filename2=req.files.image2[0].filename;
        
       
          MyBatery.setUrl(filename1,filename2)
        }
  
      const bateria = await bateriaController.CreateBateria(MyBatery);
      const status = "Success";
      return res.status(200).json({ status, bateria });
   
   
      

    }catch(error){
        res.status(500).json({
            error:message.error
        })
    }


 })















   

    //---------Modificar los datos del order-------------//  


   
   router.put('/:id/update',async (req,res)=>{

    try{
         let id= req.body._id;
       
        res.status(200).json(await bateriaController.updateBateria(id,order))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});

   module.exports = router;
