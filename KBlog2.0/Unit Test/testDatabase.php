<?php
	include "../Classes/Database.php";
	include "../Classes/Template.php";
	include "../Config.php";
	include "../Classes/DbConnector.php";

	$config = new Config();

	$connection = new DbConnector($config);
	
	$handler = new Database($config);

	$page = $handler->getPageModules(1);
	$modules = $handler->getModules(1, 1);
	$content = $handler->getContentParts($modules[1][2]);

	echo "<pre> Modules: </br> ";
	//print_r($modules);
	echo "</pre>";

	echo "<pre> Content: </br>";
	//print_r($content);
	echo "</pre>";


?>