var Router = require('koa-router');

var router = Router({
    prefix: '/getSensorData'
 }); 
 
 //because we are going to parse POST parameters we will import koa-bodyparser
 var bodyParser = require('koa-bodyparser');
 
 router.post('/create_db', async (ctx, next) => {
 
     let item = await adminModel.createTables(ctx.params.id);
     ctx.body = item;
 
 });
 
 module.exports = router;