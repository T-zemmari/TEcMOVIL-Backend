const router = require("express").Router();
const userController = require('../Controllers/user-controller');



router.get('/',async (req,res)=>{
     
    try{
     res.status(200).json(await userController.getAllUsers());
    }catch(error){
        res.status(500).send({message:error.message});
    }

});

router.get('/:id',async (req,res)=>{
    try{
    let id = req.params.id;    
    res.status(200).json(await userController.getUserById(id));
    }catch(error){
        res.status(500).send({message:error.message});
    }
});

router.get('/',async (req,res)=>{
    try{
        let user = await userController.getUserByEmail(email);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

router.post("/", async(req, res) => {
    try {
        const user = await userController.CreateUser(req.body);
        const status = "Success";
        res.json({ status, user });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
});



router.put('/',async (req,res)=>{
    try{
       
       let id = req.body.id;
       console.log(req.body)
       console.log(id)
       let status = 'Success';
       let user = await userController.updateUser(id,req.body,{useFindAndModify: false})
       
       console.log(user)
       res.status(200).json({status,user});
    }catch(error){
        res.status(500).send({message:error.message});
    }



})

router.delete('/id:',async (req,res)=>{
    try{
       res.json(await userController.destroy(id));
    }catch(error){
        res.status(500).send({message:error.message});
    }



});



module.exports = router;


