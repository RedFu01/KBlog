<?php 
	include "../Classes/Database.php";
	include "../Config.php";
	include "../Classes/DbConnector.php";

	header("Content-type: application/json");

	$config = new Config();

	$connection = new DbConnector($config);
	
	$handler = new Database($config);

	$page = $handler->getModules(1, 1);

	echo json_encode($page);
?>