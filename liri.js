// all packages downloaded
require("dotenv").config();

var inquirer = require("inquirer");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify)({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

spotify
    .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error('Error occurred: ' + err);
    });
    
const db = require('db')
db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
})

// prompt for a song search
inquirer.prompt([

    {
        type: "input",
        name:"userInput",
        message: "Song search: "
    }
]).then(function(searchSong){
    
})