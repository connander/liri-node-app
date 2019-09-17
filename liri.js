require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

spotify.search({
    type: "track", query: "All the Small Things", limit: 1 }, function(err, data) {
        if (err) {
            return console.log("Error occured: " + err);
        }
    
    //console.log(data);
})


var queryUrl = "https://rest.bandsintown.com/artists/" + "hozier" + "/events?app_id=codingbootcamp";
axios.get(queryUrl).then(
     function(response) {
        //  if (err) {
        //      return console.log("Error occured: " + err);
        // }
        //console.log(response.data.venue);
        var Json = JSON.stringify(response.data.venue);
        console.log(Json);
    }
)



// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// axios.get(queryUrl).then(
//     function(response) {
//         console.log("* Title of the movie. " + response.data.Title +
//         "\n* Year the movie came out. " + response.data.Year +
//         "\n* IMDB Rating of the movie. " + response.data.Ratings +
//         "\n* Rotten Tomatoes Rating of the movie. " + response.data.WORDS +
//         "\n* Country where the moview was produced. " + response.data.Country +
//         "\n* Language of the movie. " + response.data.Language +
//         "\n* Plot of the movie. " + response.data.Plot +
//         "\n* Actors in the movie. " + response.data.Actors)
//     }
// )

