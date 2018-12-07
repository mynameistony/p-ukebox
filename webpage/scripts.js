function updateInfo(){
	sendAction("showInfo");
};

function changeVolume(){
	newVolume = document.getElementById("volumeSlider").value;
	sendAction(newVolume);
};

function handleResponse(thisResponse){
	var currentInfo = JSON.parse(thisResponse);
	if(currentInfo.currentTitle!=""){
		document.getElementById("currentTitle").innerHTML = currentInfo.currentTitle;
	}else{
		document.getElementById("currentTitle").innerHTML = "Unknown Title";
	}

	if (currentInfo.currentArtist!="") {
		document.getElementById("currentArtist").innerHTML = currentInfo.currentArtist;
	}else{
		document.getElementById("currentArtist").innerHTML = "Unknown Artist";
	}

	if(currentInfo.randomState=="off"){
		document.getElementById("randomState").style["background-color"]="red";
	}
		else{
		document.getElementById("randomState").style["background-color"]="green";
	}

	if(currentInfo.repeatState=="off"){
		document.getElementById("repeatState").style["background-color"]="red";
	}
		else{
		document.getElementById("repeatState").style["background-color"]="green";
	}	

	if(currentInfo.currentState=="paused"){
		document.getElementById("togglePlay").src = "/play-icon.png";
	}else{
		document.getElementById("togglePlay").src = "/pause-icon.png";
	}
	//document.getElementById("randomState").innerHTML = currentInfo.randomState;
	//document.getElementById("repeatState").innerHTML = currentInfo.repeatState;

	
};

function sendAction(thisAction){

	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
			handleResponse(request.responseText);
	}
	request.open("GET", "/actions.php?action="+thisAction, true);
	request.send(null);
};

updateInfo();