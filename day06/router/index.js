const router = require('koa-router')();

const userRouter = require('./api/user');

const listRouter = require('./api/list');

router.use('/api',userRouter.routes(),userRouter.allowedMethods());

router.use('/api',listRouter.routes(),listRouter.allowedMethods());

module.exports = router;
