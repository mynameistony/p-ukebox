<?php 
	$artist = $_GET['artist'];
	if($artist!=""){
		echo shell_exec("bash ../backend/showArtist.sh $artist");
	}else{
		$action = $_GET['action'];
		$response = shell_exec("bash ../backend/actions.sh $action");
		echo "$response";
	}
?>
