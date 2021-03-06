const router = require("express").Router();
const userController = require('../Controllers/user-Controller');
const authAdmin = require('../Middleware/Auth-admin');
const auth = require('../Middleware/Auth');

router.get('/', authAdmin, async (req, res) => {

    try {
        res.status(200).json(await userController.getAllUsers());
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

});

router.get('/:id', authAdmin, async (req, res) => {
    try {
        let id = req.params.id;
        res.status(200).json(await userController.getUserById(id));
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.get('/', authAdmin, async (req, res) => {
    try {
        let user = await userController.getUserByEmail(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
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



router.put('/', auth, async (req, res) => {
    try {

        let id = req.body.id;

        let status = 'Success';
        let user = await userController.updateUser(id, req.body, { useFindAndModify: false })


        res.status(200).json({ status, user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }



})

router.delete('/id:', authAdmin, async (req, res) => {
    try {
        res.json(await userController.destroy(id));
    } catch (error) {
        res.status(500).send({ message: error.message });
    }



});



module.exports = router;


