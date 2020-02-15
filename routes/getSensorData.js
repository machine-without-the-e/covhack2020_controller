var Router = require('koa-router');


//Prefix for website
var router = Router({
    prefix: '/pi/getSensorData'
 });
 
 //because we are going to parse POST parameters we will import koa-bodyparser
 var bodyParser = require('koa-bodyparser');
 
 /**
  * Gets all of the recipes unless sepcified by pagination, title, authorID or categoryID in params
  *
  * @name Get route
  * @route {GET} /
  */
 router.get('/', async (cnx) => {
    
 })
 
 module.exports = router;