<?php 
	$action = $_GET['action'];

	echo shell_exec("bash ../backend/actions.sh $action");

?>
