

//dependencies 

// Import the request npm package.
var request = require("request");
// Import the FS package for read/write.
var fs = require("fs");


let twitterKeys = require("./keys.js");
const Twitter = require('twitter');

// different set up than twitter
let spotifyKeys = require("./keys.js");
const SpotifyWebApi = require('spotify-web-api-node');



// Writes to the log.txt file
var getArtistNames = function(artist) {
    return artist.name;
  };
  // Function for running a Spotify search
  var getMeSpotify = function(songName) {
    if (songName === undefined) {
      songName = "What's my age again";
    }
    spotify.search(
      {
        type: "track",
        query: songName
      },
      function(err, data) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
          console.log(i);
          console.log("artist(s): " + songs[i].artists.map(getArtistNames));
          console.log("song name: " + songs[i].name);
          console.log("preview song: " + songs[i].preview_url);
          console.log("album: " + songs[i].album.name);
          console.log("-----------------------------------");
        }
      }
    );
  };
  // Function for running a Twitter Search
  var getMyTweets = function() {
    var client = new Twitter(keys.twitter);
    var params = {
      screen_name: "cnn"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
      if (!error) {
        for (var i = 0; i < tweets.length; i++) {
          console.log(tweets[i].created_at);
          console.log("");
          console.log(tweets[i].text);
        }
      }
    });
  };

// add movies to this at a later point maybe??




