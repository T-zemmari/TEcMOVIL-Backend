
const router = require('express').Router();
const userRouter = require('./Routers/user-router');
const loginRouter = require('./Routers/login-router');
const productRouter=require('./Routers/Product-router');

router.use("/users",userRouter);
router.use('/login', loginRouter);
router.use('/products',productRouter);

module.exports = router;