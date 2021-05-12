const router = require('express').Router();
const userRouter = require('./Routers/User-Router');
const loginRouter = require('./Routers/Login-Router');
const productRouter=require('./Routers/Product-Router');
const AccesoriosRouter = require('./Routers/Accessorio-Router');
const RepuestoRouter =require('./Routers/Repuesto-Router');
const orderRouter = require('./Routers/Order-Router');
const bateriaRouter = require('./Routers/Bateria-Router');




router.use("/users",userRouter);
router.use('/login', loginRouter);
router.use('/products',productRouter);
router.use('/accessorios',AccesoriosRouter);
router.use('/Repuestos',RepuestoRouter);
router.use('/orders',orderRouter);
router.use('/baterias',bateriaRouter);

module.exports = router;