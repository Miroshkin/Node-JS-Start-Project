//Problem
var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require('querystring');
//Solution
//1.Create a web server
var http = require('http');

var commonHeaders = {'Content-Type':'text/html'};

//2. Handle HTTP route GET and POST i.e. Home
function home (request, response) {
  //  if url ==="/" && GET
    if (request.url === "/"){
      //    show search
      response.writeHead(200, commonHeaders);
      renderer.view('header',{}, response);
      renderer.view('search',{}, response);
      renderer.view("footer",{}, response);
      response.end();
    } else {
       var a = querystring.parse(request);
       console.dir(a);
    }
  // if url ==="/" POST
  //   redirect to /:username
}


//3. Handle HTTP route GET /:username /chalklers
function user(request, response) {
  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.writeHead(200, commonHeaders);
    renderer.view('header',{}, response);

    var studentProfile = new Profile(username);
    studentProfile.on("end", function(profileJSON){
      //Store the values
      var values = {
        avatarUrl : profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      renderer.view('profile',values, response);
      renderer.view('footer',{}, response);
      response.end();

    });

    studentProfile.on("error", function(error){
      renderer.view('error',{errorMessage: error.message}, response);
      renderer.view('search',{}, response);
      renderer.view('footer',{}, response);
      response.end();
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
