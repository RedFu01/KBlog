<?php
	include "../Classes/Template.php";
	$cpList = $_GET["cpList"];
	$moduleList = $_GET["moduleList"];

	$tmpl = new Template();

	echo json_encode($tmpl->getTemplate($mdOrCp, $template));
?>