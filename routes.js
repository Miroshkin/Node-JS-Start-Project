//Problem
var Profile = require("./profile.js");
//Solution
//1.Create a web server
var http = require('http');

//2. Handle HTTP route GET and POST i.e. Home
function home (request, response) {
  //  if url ==="/" && GET
    if (request.url === "/"){
      //    show search
      response.writeHead(200, {'Content-Type':'text/plain'});
      response.write('Header\n');
      response.write('Search\n');
      response.end("Footer\n");
    }
  // if url ==="/" POST
  //   redirect to /:username
}


//3. Handle HTTP route GET /:username /chalklers
function user(request, response) {
  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write("Header\n");

    var studentProfile = new Profile(username);
    studentProfile.on("end", function(profileJSON){
      //Store the values
      var values = {
        avatarUrl : profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };

      response.write(values.username + " has" + values.badges + "\n");
      response.end('Footer\n');
    });

    studentProfile.on("error", function(error){
      response.write(error.message + "\n");
      response.end('Footer\n');
    });
  }
}

var studentProfile = new Profile("chalkers");
module.exports.home = home;
module.exports.user = user;
  //if url ==="/..."
  //get json from Treehouse
  //on end show profile
  //show error

//4. Function that handles the reading of files and merge in value
  //read from file and get a String
  //match values in to string
