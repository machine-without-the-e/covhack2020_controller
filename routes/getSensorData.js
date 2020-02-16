var Router = require('koa-router');
var data = require('../getSensorData');


//Prefix for website
var router = Router({
    prefix: '/pi/getSensorData'
 });
 /**
  * Gets current moisture and light data
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