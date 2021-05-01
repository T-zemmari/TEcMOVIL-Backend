const router = require("express").Router();
const OrderController=require('../Controllers/order-controller');
const Order= require('../Model/Orders');



  //------------- Listar todos los Orders---------------//

   router.get('/',async (req,res)=>{

       try{
           

           res.status(200).json(await AccessorioController.getAllOrders())
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

        res.status(200).json(await AccessorioController.getorderById(id))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});


//----------Guardar un order en la base de datos---//  

   router.post('/',async (req,res)=>{

      try{


          const {Product_id,User_id,Payment,Product_info} = req.body;
          const MyOrder = Order({
            Product_id,User_id,Payment,Payment,Product_info,
          })

          
        
    
        const order = await OrderController.CreateOrder(MyOrder);
        const status = "Success";
        return res.status(200).json({ status, order });
     
     
        

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
       
        res.status(200).json(await OrderController.updateOrder(id,order))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});

   module.exports = router;
