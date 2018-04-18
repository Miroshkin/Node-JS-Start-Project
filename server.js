//Problem

//Solution
//1.Create a web server
var http = require('http');

//create a server object:
http.createServer(function (request, response) {
  homeRoute(request, response); //write a response to the client
//  response.end(); //end the response
//  response.write("This is after the end\n");
}).listen(3000); //the server object listens on port 1337
console.log('Server running at http://<workspace-url>');


//2. Handle HTTP route GET and POST i.e. Home
function homeRoute (request, response) {
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
  //if url ==="/..."
  //get json from Treehouse
  //on end show profile
  //show error

//4. Function that handles the reading of files and merge in value
  //read from file and get a String
  //match values in to string
