//const request = require('request');


const geoCoding = require('./utils/geocodind')
const foreCast = require('./utils/forecast')

const address = process.argv[2];

if(!address) { 
     console.log("Provide adress...");
} else {
    geoCoding(address,(error, { longitude, latitude, place_Name }) => {
        if(error) {
        return console.log(error)
        }     
        foreCast(longitude, latitude, (error,forecastData) => {
            if(error) {
            return console.log(error);
            } 
            console.log(place_Name);
            console.log(forecastData);
            console.log("mahesh");
        })
        
    })
}






// const url = "https://api.darksky.net/forecast/7e279b6851ba642598499e23bc92b855/37.8267,-122.4233"; 
// request({url: url,json: true}, (error,response) => {
//     //var data = JSON.parse(response.body);
//     if(error) {
//         console.log("You are not connected api darksky");
//     } else if(response.body.error) {
//         console.log("response data error...");
//     }
//     else {
//         console.log("It is currently" + response.body.currently.temperature + "degree out. There is "+response.body.currently.precipProbability+" chance of rain.");
//     }    
// })

// const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFoZXNoMjEiLCJhIjoiY2syZXB6NjM1MGMzZDNjcXBuNjV3bnI2dSJ9.gwEfQ_zrhXl4T9B5W76DQQ"
// request({url:mapBoxUrl, json: true},(error,response) =>{
//     if(error) {
//         console.log("You are not connected api mapbox");
//     } else if(response.body.features.length === 0) {
//         console.log("Unable to find location. Try another search");
//     }
//     else {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(longitude,latitude);
//     }
// })


// foreCast(37.8267, -122.4233, (error,data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })


// geoCoding("pune",(error,data) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(data)

//     }
// })


