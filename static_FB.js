var database = [{username:"Kushal Bhowmick", password:"1234"},
		{username:"roy", password:"rtsyw"},
		{username:"harsha", password:"7845"}];
var newsFeed=[{username:"ritesh",timeline:"i m so tired"},
	         {username:"roy",timeline:"hey i feeling good"},
	         {username:"tony", timeline:"I m Iron Man"},
	          {username:"ultron", timeline:"I dont even know you"}];
function isUserValid(username, password){
	for(var i = 0; i< database.length; i++){
	if(database[i].username === username && database[i].password 	=== password){
	return true;
	}
	} return false;
	}

function signIn(username, password){
	if(isUserValid(username,password)){
	console.log(newsFeed);  
	} else {
	alert("wrong username & password");
	}
	}

var userNamePrompt = prompt("What's ur username?");
var passwordPrompt = prompt("What ur password?");

signIn(userNamePrompt,passwordPrompt);
