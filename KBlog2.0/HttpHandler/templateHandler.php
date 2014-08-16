<?php
	include "../Classes/Template.php";
	$template = $_GET["template"];
	$mdOrCp = $_GET["mdOrCp"];

	$tmpl = new Template();

	echo json_encode($tmpl->getTemplate($mdOrCp, $template));
?>