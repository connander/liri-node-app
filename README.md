# liri-node-app

This app is creating a program that can run simple look-ups and pulling basic information for artists, songs, concerts, and movies.

The app is seperated by multiple files, they are as follows:

1. Keys.js - This holds the keys call to .env file for spotify api.
2. liri.js - The meat and potatoes of this program, this contains all the logic for the different commands.
              All the commands are held in separate functions and then called through an if-else statment that compares for
              instructions entered in through the terminal.
3. random.txt - This holds instructions for a current uncompleted function that is supposed to take the text from the file
                and put them into the terminal to give a command.
                
To work this app, pull up terminal/bash. Then navigate to the folder containing the app. After doing so, enter node liri.js and any of the below commands:

concert-this, followed by the name of a artist.
spotify-this-song, followed by the name of a song.
movie-this, followed by a name of a movie (be sure to replace spaces with - ).
do-what-it-says(currently non-functional)

https://github.com/connander/liri-node-app

technologies used in this app are as follows:

1. node-spotify-api
  1a. Spotify api
2. Axios
3. Moment
4. DotEnv

This app was developed, tested, and polished by Connor Stark

Video of app being used: https://youtu.be/w_ESDp3XcMk
