function changeVolume(){
	newVolume = document.getElementById("volumeSlider").value;
	sendAction(newVolume);
};

function updateInfo(thisAction,thisInfo){

	if(thisAction=="showArtists"){
		document.getElementById("artistSelector").innerHTML =thisInfo;
	}else{
		var currentInfo = JSON.parse(thisInfo);
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
	}
};
function sendAction(thisAction){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
			updateInfo(thisAction,request.responseText);
	}
	request.open("GET", "/actions.php?action="+thisAction, true);
	request.send(null);
};

function showTracks(thisArtist, theseTracks){

};

function showTrackByArtist(){
	thisArtist=document.getElementById("artistSelector").value;
	alert("Now is where I would let pick tracks from "+thisArtist+" but I am still broken :(");

	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
			showTracks(thisArtist,request.responseText);
	}
	request.open("GET", "/actions.php?artist="+thisArtist, true);
	request.send(null);	
}

sendAction("showInfo");
sendAction("showArtists");