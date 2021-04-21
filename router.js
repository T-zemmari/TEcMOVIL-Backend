
const router = require('express').Router();
const userRouter = require('./Routers/user-router');
const loginRouter = require('./Routers/login-router');


router.use("/users",userRouter);
router.use('/login', loginRouter);

module.exports = router;