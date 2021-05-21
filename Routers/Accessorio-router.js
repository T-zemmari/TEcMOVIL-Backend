const router = require("express").Router();
const AccessorioController = require('../Controllers/Accessorio-Controller');
const upload = require('../libs/Storage.js');
const Accessorio = require('../Model/Accessorio');



//------------- Listar todos los accessorios---------------//

router.get('/', async (req, res) => {

    try {


        res.status(200).json(await AccessorioController.ListAllAccessories())
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }


});

//-------------Listar solo un accessorio-----------------//  

router.get('/', async (req, res) => {

    try {
        let id = req.body._id;

        res.status(200).json(await AccessorioController.GetOneAccessory(id))
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }


});


//----------Guardar un accessorio en la base de datos---//  

router.post('/', upload.fields([{ name: 'image1' }, { name: 'image2' }]), async (req, res) => {

    try {


        const { name, priceWithoutIva, priceWithIva, description, rate, color, stock, image1, image2 } = req.body;
        const MyAccessory = Accessorio({
            name, priceWithoutIva, priceWithIva, description, rate, color, stock, image1, image2
        })


        if (req.files) {

            const filename1 = req.files.image1[0].filename;
            const filename2 = req.files.image2[0].filename;
            MyAccessory.setUrl(filename1, filename2);
        }

        const Accessory = await AccessorioController.StoreAccessory(MyAccessory);
        const status = "Success";
        return res.status(200).json({ status, Accessory });




    } catch (error) {
        res.status(500).json({
            error: message.error
        })
    }


})

//---------Modificar los datos del producto-------------//  



router.put('/:id/update', async (req, res) => {

    try {
        let id = req.body._id;
        //let product = await productController.GetOneProduct(id);
        //console.log(product)
        res.status(200).json(await AccessorioController.updateAccessory(id, Accessory))
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }


});

module.exports = router;
