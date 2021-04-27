
const router = require('express').Router();
const userRouter = require('./Routers/user-router');
const loginRouter = require('./Routers/login-router');
const productRouter=require('./Routers/Product-router');
const AccesoriosRouter = require('./Routers/Accessorio-router');

router.use("/users",userRouter);
router.use('/login', loginRouter);
router.use('/products',productRouter);
router.use('/accessorios',AccesoriosRouter)

module.exports = router;