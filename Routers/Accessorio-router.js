const router = require("express").Router();
const AccessorioController=require('../Controllers/Accessorio-controller');
const upload = require('../libs/Storage.js');
const Accessorio = require("../Model/Accessorio");



  //------------- Listar todos los accessorios---------------//

   router.get('/',async (req,res)=>{

       try{
           

           res.status(200).json(await AccessorioController.ListAllAccessorios())
       }catch(error){
           res.status(500).json({
               error:error.message
           })
       }
        

   });

   //-------------Listar solo un accessorio-----------------//  

   router.get('/',async (req,res)=>{

    try{
         let id= req.body._id;

        res.status(200).json(await AccessorioController.GetOneAccessory(id))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});


//----------Guardar un accessorio en la base de datos---//  

   router.post('/',upload.single('image'),async (req,res)=>{

      try{


          const {name,price,description,rate,color,stock,imgUrl} = req.body;
          const MyAccessory = Accessorio({
              name,price,description,rate,color,stock,imgUrl
          })

          
          if(req.file){

            const {filename}=req.file;
            MyAccessory.setUrl(filename)
          }
    
        const Accessory = await AccessorioController.StoreAccessory(MyAccessory);
        const status = "Success";
        return res.status(200).json({ status, Accessory });
     
     
        

      }catch(error){
          res.status(500).json({
              error:message.error
          })
      }


   })

    //---------Modificar los datos del producto-------------//  


   
   router.put('/:id/update',async (req,res)=>{

    try{
         let id= req.body._id;
         //let product = await productController.GetOneProduct(id);
         //console.log(product)
        res.status(200).json(await AccessorioController.updateAccessory(id,Accessory))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});

   module.exports = router;
