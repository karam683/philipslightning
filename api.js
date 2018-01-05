//var NodeAE = require('@sap/sap-iot-ae-node-wrapper')
var NodeAE = require('./sdk/iot-application-services-sdk-nodejs-master')
var nodeAE = new NodeAE()

// set the base URI for the NodeWrapper
nodeAE.setBaseURI('appiot-mds') // 'appiot-mds' = the app of the API we will use in the following
//nodeAE.setBaseURI("composite-things-odata")

module.exports = {

getByThingId: function (req,res){

	var thingId=	req.params.thingid;
	console.log('thingId:', thingId);
	var loadingThings = nodeAE.get('/Things(%27'+thingId+'%27)/hcl.mlai.rhlighttest1:pldemoscreenfields/Default')

	loadingThings.then(
	  function success (oResponse) {
	    console.log(JSON.parse(oResponse.body)) // will print all Things on the console
	    res.send(oResponse.body);
	  },
	  function error (err) {
	    res.send(err);
	    throw err
	  }
	)
},

getAllThings: function (req,res){
	var loadingThings = nodeAE.get('/Things')

	loadingThings.then(
	  function success (oResponse) {
	    console.log(JSON.parse(oResponse.body)) // will print all Things on the console
	    res.send(oResponse.body);
	  },
	  function error (err) {
	    res.send(err);
	    throw err
	  }
	)

},

updateCity: function (req,res){
	var cityName=	req.params.city;

	var oDataPayload ={
    "value": [
        		{
	            		"_time": "2017-11-24T11:11:36.000Z",
	            		"PLLatitude": "51.509865",
	            		"PLLongitude": "-0.118092",
	            		"city": cityName,
	            		"rhtest1id": null,
	            		"rhtest1name": null
        		}
    		]
		}
	var loadingThings = nodeAE.put("/Things('07544495CE0C4AEDBF493D5F2D298CDC')/hcl.mlai.rhlighttest1:pldemoscreenfields/Default", oDataPayload)
	loadingThings.then(
  		function success (oResponse) {
    		console.log(JSON.parse(oResponse.body)) // will print all Things on the console
  		},
  		function error (err) {
   		 throw err
 		 }
	)
},
UpdatePowerConsumption:function (req,res){
	var powerConsumptionCurrent=req.params.power;
	var power24Hours=powerConsumptionCurrent*1440;
	var powerTotalWeek=power24Hours*7;
	var powerConsumptionCurrentCycle=powerTotalWeek*4;

	var oDataPayload ={
    "value": [
        {
            "_time": "2018-01-05T18:13:56.000Z",
            "Utilisation": 98,
            "PowerConsumptionInCurrentCycle": powerConsumptionCurrentCycle,
            "PowerTotal24hours": power24Hours,
            "TimeOn": 37,
            "CurrentPowerConsumption": powerConsumptionCurrent,
            "PowerTotalWeek": powerTotalWeek
        }
        ]
    }
	var loadingThings = nodeAE.put("/Things('07544495CE0C4AEDBF493D5F2D298CDC')/hcl.mlai.rhlighttest1:pldemoscreenfields/PLCalculated", oDataPayload)
	loadingThings.then(
  		function success (oResponse) {
    		console.log("200 OK") // will print all Things on the console
  		},
  		function error (err) {
   		 throw err
 		 }
	)
}




}
var oPayload ={
         "_id": "07544495CE0C4AEDBF493D5F2D298CDC",
         "_externalId": "PLDEMOLAMP4",
         "_name": "PLDEMOLAMP4",
         "_description": {
            "en": "PL Demo Lamp 7"
         },
         "_thingType": [
            "hcl.mlai.rhlighttest1:pldemoscreenfields"
         ],
         "_objectGroup": "9E387CA3878C4A86A6D6A5236021A7D4"
      }
   

 // now we can use plain http methods to send requests (post, get, put, delete)
 

//var loadingThings = nodeAE.put("/Things('07544495CE0C4AEDBF493D5F2D298CDC')/hcl.mlai.rhlighttest1:pldemoscreenfields/Default", oDataPayload)

