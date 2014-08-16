<?php
	include "RenderBlog.php";
	include "PhpHandler.php";
	include "Config.php"
	$startId = $_GET['start'];
	$viewPortSize = $_GET['screenSize'];

	$r = new RenderBlog();
	$r->postRepeater($uid, $handler, $startId);
?>