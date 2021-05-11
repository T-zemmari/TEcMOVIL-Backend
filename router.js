const router = require('express').Router();
const userRouter = require('./Routers/user-router');
const loginRouter = require('./Routers/login-router');
const productRouter=require('./Routers/Product-router');
const AccesoriosRouter = require('./Routers/Accessorio-router');
const RepuestoRouter =require('./Routers/Repuesto-router');
const orderRouter = require('./Routers/order-router');
const bateriaRouter = require('./Routers/Bateria-router');




router.use("/users",userRouter);
router.use('/login', loginRouter);
router.use('/products',productRouter);
router.use('/accessorios',AccesoriosRouter);
router.use('/Repuestos',RepuestoRouter);
router.use('/orders',orderRouter);
router.use('/baterias',bateriaRouter);

module.exports = router;