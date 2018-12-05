function buttonPressed(thisButton){
	alert(thisButton);

	switch(thisButton){
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

function sendAction(thisAction, thisResult){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
			buttonPressed(request.responseText);
	}
	request.open("GET", "/actions.php?action="+thisAction, true);
	request.send(null);
}