// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express=require('express');

// Require bodyparser
const bodyParser=require('body-parser');

// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=4000;

const server=app.listen(port,listening);
function listening(){
    console.log('server is running');
    console.log(`running on localhost: ${port}`);






    
}

//post route
app.post('/add', addToserver);

function addToserver(req,res){

  newEntry = {
    temp: req.body.temp,
    date:req.body.date,
    content:req.body.content
  }

  projectData=newEntry;
  res.send(projectData);
  console.log(projectData);
  console.log('data arrived from server');
    
  
}



// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
  console.log('data is received from server');
};

