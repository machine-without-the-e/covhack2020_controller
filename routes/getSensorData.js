var Router = require('koa-router');
var data = require('../getSensorData');


//Prefix for website
var router = Router({
    prefix: '/pi/getSensorData'
 });
 
 //because we are going to parse POST parameters we will import koa-bodyparser
 var bodyParser = require('koa-bodyparser');
 
 /**
  * Gets current moisture and light data
  *
  * @name Get route
  * @route {GET} /
  */
 router.get('/', async (cnx) => {

    try{
        allData = { "light": data.getLightData,
                    "moist": data.getMoistData}
    }
    catch(error){
        cnx.response.status = error.status;
        cnx.body = {message:error.message};
    }

 })
 
 module.exports = router;