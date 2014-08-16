<?php
	include "../Classes/Database.php";
	include "../Config.php";
	include "../Classes/DbConnector.php";

	header("Content-type: application/json");

	$config = new Config();

	$connection = new DbConnector($config);
	
	$handler = new Database($config);

	$name = $_GET["name"];

	$page = $handler->getPage(1);

	echo $page["modules"];

?>