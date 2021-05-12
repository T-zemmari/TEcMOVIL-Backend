const router = require("express").Router();
const orderController=require('../Controllers/Order-Controller');
const Order= require('../Model/Orders');
const auth = require('../Middleware/Auth');


  //------------- Listar todos los Orders---------------//

   router.get('/',async (req,res)=>{

       try{
           

           res.status(200).json(await orderController.getAllOrders())
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

        res.status(200).json(await orderController.getorderById(id))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});


//----------Guardar un order en la base de datos---//  
router.post("/",async(req, res) => {
    try {

        

        const order = await orderController.CreateOrder(req.body);
        const status = "Success";
        res.json({ status, order });
         
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
});
   

    //---------Modificar los datos del order-------------//  


   
   router.put('/:id/update',async (req,res)=>{

    try{
         let id= req.body._id;
       
        res.status(200).json(await orderController.updateOrder(id,order))
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
     

});

   module.exports = router;
