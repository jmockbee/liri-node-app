let twitterKeys = require("./keys.js");
const Twitter = require('twitter');

// different set up than twitter
let spotifyKeys = require("./keys.js");
const SpotifyWebApi = require('spotify-web-api-node');




let arg0 = process.argv[0];
let arg1 = process.argv[1];
let arg2 = process.argv[2];
let arg3 = process.argv[3];




// capture user args and call specific function
if (arg2 === "my-tweets") {
    getTweets();

} else if (arg2 === "spotify-this-song") {
    getSongs(arg3);

} else if (arg2 === "movie-this") {
    getMovies(arg3);

} else if (arg2 === "do-what-it-says") {
    doSomething();
} else {
    console.log(" not a valid input \n\n valid commands are: \n 1. node liri.js my-tweets \n 2. node liri.js spotify-this-song");
}






function getTweets() {
    var client = new Twitter(twitterKeys);

    var params = {
        screen_name: '@jonmockbee'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
         
            tweets.forEach(function (value, index) {
                console.log(` TWEET: ${value.text} `);
                console.log("----------------------------------------------------------------------\n");
            });

        }
        if (error) {
            console.log(error);
        }
    });
}









function getSongs(song) {
    console.log(song);
  


}

function getMovies() {
    console.log("movie function");


}
// remember this 
//function doSomething() {
 //   console.log("do what it says function");


//}