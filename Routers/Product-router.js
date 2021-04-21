const router = require("express").Router();
const productController=require('../Controllers/Product-controller');
const Product = require("../Model/Product-model");



   router.get('/',async (req,res)=>{

       try{
         
          res.json(await productController.ListAllProducts(product))
       }catch(error){
           res.status(500).json({
               error:error.message
           })
       }
        

   });

   router.post('/',async (req,res)=>{

      try{
        let product = req.body;
        res.json(await productController.StoreProduct(product))

      }catch(error){
          res.status(500).json({
              error:message.error
          })
      }


   })
