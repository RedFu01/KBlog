<?php
	include "../Classes/Database.php";
	include "../Classes/Template.php";
	include "../Config.php";
	include "../Classes/DbConnector.php";

	$config = new Config();

	$connection = new DbConnector($config);
	
	$handler = new Database($config);

	$template = new Template();

	
?>
