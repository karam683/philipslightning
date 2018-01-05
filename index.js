express = require('express');
var api =require('./api.js'); 
var app = express();

app.use('/getThing/:thingid', api.getByThingId)
app.use('/getAllThings', api.getAllThings)
app.use('/ChangeLocation/:city', api.updateCity)


app.listen(process.env.PORT || 3000, function () {
  console.log('philipslightning app is listening on port 3000!');
});
