<?php 
	$action = $_GET['action'];
	$response = shell_exec("bash ../backend/actions.sh $action");

	#echo "$action:$response";

	echo "$response";

?>
