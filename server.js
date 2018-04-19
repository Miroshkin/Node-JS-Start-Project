//Problem
var Profile = require("./profile.js");
//Solution
//1.Create a web server
var http = require('http');
var routes = require("./routes.js");

//create a server object:
http.createServer(function (request, response) {
  //write a response to the client
//  response.end(); //end the response
//  response.write("This is after the end\n");
  routes.home(request, response);
  routes.user(request,response);
}).listen(3000); //the server object listens on port 1337
console.log('Server running at http://<workspace-url>');




var studentProfile = new Profile("chalkers");
  //if url ==="/..."
  //get json from Treehouse
  //on end show profile
  //show error

//4. Function that handles the reading of files and merge in value
  //read from file and get a String
  //match values in to string
