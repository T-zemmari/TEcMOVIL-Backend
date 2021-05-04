const router = require("express").Router();
const productController=require('../Controllers/Product-controller');
const upload = require('../libs/Storage.js');
const Product = require('../Model/Product-model');


   //------------- Listar todos los accessorios---------------//

   router.get('/',async (req,res)=>{

       try{
           

           res.status(200).json(await productController.ListAllProducts())
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

        res.status(200).json(await productController.GetOneProduct(id))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});


   router.post('/',upload.fields([{name:'imgUrl'},{name:'image2'}]),async (req,res)=>{

      try{


          const {name,price,description,rate,color,pantalla,imgUrl,image2} = req.body;
          const MyProduct = Product({
              name,price,description,rate,color,pantalla,imgUrl,image2
          })

          
          if(req.files){

            const filename1=req.files.imgUrl[0].filename;
            const filename2=req.files.image2[0].filename;
            console.log(filename1,filename2)
         
            MyProduct.setUrl(filename1,filename2)
          }
    
        const Movile = await productController.StoreProduct(MyProduct);
        const status = "Success";
        return res.status(200).json({ status, Movile });
     
     
        

      }catch(error){
          res.status(500).json({
              error:message.error
          })
      }


   })

   
   router.put('/:id/update',async (req,res)=>{

    try{
         let id= req.body._id;
         //let product = await productController.GetOneProduct(id);
         //console.log(product)
        res.status(200).json(await productController.updateProduct(id,product))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});

   module.exports = router;
