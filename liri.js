//Parts of this code was taken from mattsainson on github in an effort to try and get my code to work.
//I grabbed what I understood from his code and saw that it worked for what i needed.
//In particular the issue was with the response I was getting from the API's

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");


var functionCall = process.argv[2]

if (functionCall === "spotify-this-song") {
    spotifyThisSong();
}

else if (functionCall === "concert-this") {
    concertThis();
}

else if (functionCall === "movie-this") {
    movieThis();
}

else {
    console.log("Please enter a proper command." +
    "\nTry one of these these:" +
    "\nspotify-this-song" + 
    "\nconcert-this" + 
    "\nmovie-this"
    );
}

function spotifyThisSong() {

    var songName = process.argv[3];

    if (!songName) {
        songName = "The Sign";
    }


    spotify.search({
        type: "track", query: songName, limit: 1
    }, function (err, data) {
        if (err) {
            return console.log("Error occured: " + err);
        }
        var tracks = data.tracks.items;

        tracks.forEach(function (track) {
            var artists = track.artists;
            var artistsData = [];
            artists.forEach(function (artist) {
                artistsData = [
                    artist.name
                ].join(" * ");
            });
            var trackData = [
                track.name,
                track.album.name,
                track.preview_url ? "Preview URL: " + track.preview_url : "Preview URL: " + "none provided"].join("\n"); // not quite sure how to get this working yet
            console.log(artistsData + trackData);
        })

    })
}

function concertThis() {

    var concert = process.argv[3];

    if (!concert) {
        console.log("please give a artist to search for");
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {
            var events = response.data;

            events.forEach(function (evt) {
                console.log("Venue name: " + evt.venue.name +
                    "\nVenue location: " + evt.venue.city +
                    "\nDate: " + moment(evt.datetime).format('L'));
            })

        }
    )
}


function movieThis() {

    var movieName = process.argv[3];

    if (!movieName) {
        movieName = "Mr Nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("* Title of the movie. " + response.data.Title +
                "\n* Year the movie came out. " + response.data.Year +
                "\n* IMDB Rating of the movie. " + response.data.imdbRating +
                "\n* Rotten Tomatoes Rating of the movie. " + response.data.rtRating +
                "\n* Country where the moview was produced. " + response.data.Country +
                "\n* Language of the movie. " + response.data.Language +
                "\n* Plot of the movie. " + response.data.Plot +
                "\n* Actors in the movie. " + response.data.Actors)
        }
    )
}