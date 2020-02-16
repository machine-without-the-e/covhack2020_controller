var Koa = require('koa');
const cors = require('@koa/cors');

var config = require('./routes/configPump.js');
var data = require('./routes/getSensorData.js');
var squirt = require('./routes/squirt.js');

var app = new Koa();
app.use(cors());


var port = process.env.PORT || 3001;

app.use(config.routes());
app.use(data.routes());
app.use(squirt.routes());
//run the werver on port 3000

app.listen(port);
