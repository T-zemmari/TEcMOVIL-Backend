const router = require("express").Router();
const productController=require('../Controllers/Product-controller');
const upload = require('../libs/Storage.js');
const Product = require('../Model/Product-model');




   router.get('/',async (req,res)=>{

       try{
           

           res.status(200).json(await productController.ListAllProducts())
       }catch(error){
           res.status(500).json({
               error:error.message
           })
       }
        

   });

   router.post('/',upload.single('image'),async (req,res)=>{

      try{


          const {name,price,description} = req.body;
          const MyProduct = Product({
              name,price,description
          })

          
          if(req.file){

            const {filename}=req.file;
            MyProduct.setUrl(filename)
          }
    
        const product = await productController.StoreProduct(MyProduct);
        const status = "Success";
        return res.status(200).json({ status, product });
     
     
        

      }catch(error){
          res.status(500).json({
              error:message.error
          })
      }


   })

   module.exports = router;
