const express = require('express');
const path    = require('path');
const bodyParser = require("body-parser");
const app  = express();
const port =process.env.PORT || 3000;


//middlewares
app.use(express.static('public'));
app.use(bodyParser.json());


var projectsData=[
	   {id : 1,
	    name:"adminPanelGrid",
	    description:"Admin Panel that makes use of Grid for maintaining the data.",
	    hosted_link:"https://admin-panel-grid.herokuapp.com/",
	    code_link :"https://github.com/pankaj142/adminPanelGrid",
	    stack_used:"Angularjs, Nodejs, Expressjs, HTML5,CSS, Material"
	   },
	    {id : 2,
	    name:"githubSearch",
	    description:"A service that allow the user to search users on Github using username.",
	    hosted_link:" https://github-search-application1.herokuapp.com/",
	    code_link:"https://github.com/pankaj142/githubSearch",
	    stack_used:"Angularjs, Nodejs, Expressjs, HTML5,CSS, Github API"},
	    {id : 3,
	    name:"Youtube-Player",
	    description:"Copy of youtube website.",
	    hosted_link:"https://github.com/pankaj142/Reactjs-App-Youtube-Player",
	    code_link:"https://github.com/pankaj142/Reactjs-App-Youtube-Player",
	    stack_used:"Reactjs, Webpack, HTML5, CSS, youtube API, Bootstrap"},
	    {id : 4,
	    name:"runningFuel-Player",
	    description:"A service that allow user to find petrol/gas fuel in fail.",
	    hosted_link:"https://github.com/pankaj142/runningFuel",
	    code_link:"https://github.com/pankaj142/runningFuel",
	    stack_used:"MEAN, HTML5, CSS, Google Map API, Bootstrap"},
	    {id : 5,
	    name:"Tennis-Game-using-JavaScript",
	    description:"A service that allow user to find petrol/gas fuel in fail.",
	    hosted_link:"https://pankaj142.github.io/Tennis-Game-using-JavaScript/tennis.html",
	    code_link:"https://pankaj142.github.io/Tennis-Game-using-JavaScript/tennis.html",
	    stack_used:"HTML5, CSS, javascript"}

	];



//routes
app.get("/getprojects",function(req,res){
	res.json(projectsData);
});
app.get('*', (req,res)=> {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//listening
app.listen(port,()=>console.log("server listening on port " + port));