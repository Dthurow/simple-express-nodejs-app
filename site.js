 // set up ========================
 var express  = require('express');
 var app      = express();                               // create our app w/ express
 

 // configuration =================

 // all files in the static folder can be referenced by the url /static/[blah] 
 //and wont be caught by the GET request listener below
 //you can change the public facing URL by changing the "/static" string
 app.use('/static', express.static('static')); 

 // application -------------------------------------------------------------

 // all GET requests will be directed to the index.html file
 app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html'); 
});


 // start listening on the correct port ======================================
 const PORT = process.env.PORT || 5000; //if an environment variable PORT is set, use that, otherwise use port 5000
 app.listen(PORT);
 console.log("process env is: " + process.env.PORT);
 console.log("App listening on port " + PORT);