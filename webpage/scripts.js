

function updateInfo(){
	sendAction(showInfo);
}

function handleResponse(thisResponse){
	// alert(thisButton);

	 document.getElementById("trackInfoPlaceholder").innerHTML = thisResponse;

	switch(thisResponse){
		case "togglePlay":

		break;

		case "previousSong":

		break;

		case "nextSong":

		break;

		case "showArtists":

		break;

		case "showTracks":

		break;

		case "showGenres":

		break;

		default:
		break;
	}
};

function sendAction(thisAction){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
			handleResponse(request.responseText);
	}
	request.open("GET", "/actions.php?action="+thisAction, true);
	request.send(null);
}
