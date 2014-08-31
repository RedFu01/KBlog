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
	foreach ($page as $key ) {
		echo $key;
	}
	echo "<pre>";
	print_r($page);
	echo "</pre>";
	//print_r($modules);
	echo "<pre>";
	//print_r(json_encode($modules));
	echo "</pre>";
?>