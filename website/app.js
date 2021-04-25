/* Global Variables */
const apiKey='2551a0572ca201e520ead29438d3dd4e';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//talking to the api to get some data

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const zipCode =  document.getElementById('zip').value;
let baseURL=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
const feelings =  document.getElementById('feelings').value;

//calling the function to fetch data from the api
getData(baseURL,zipCode,apiKey)
.then(function(data){
  console.log('data has came from api');
  console.log(data);
  postData('/add',{date:d,temp:data.main.temp,content:feelings});

})
.then(updateUI())
}

//firstly a get request to the weather api

const getData = async (baseURL, zipCode, apiKey)=>{

  const res = await fetch(baseURL)
  try {

    const data = await res.json();
    console.log(data);
    return data;
  }  catch(error) {
    console.log("error:"+ error);
  }
}


/* async post function*/
const postData = async (url='', data={})=>{
  console.log(data)
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}
/** 
// Async GET function
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
  }
};
**/




//update UI function
const updateUI = async () => {
  const request = await fetch('/all');
  try{
      // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;

  }catch(error){
    console.log("error:"+ error);
  }
}





