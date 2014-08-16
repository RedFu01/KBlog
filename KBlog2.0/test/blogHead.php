<?php
include "DbConnector.php";
include "PhpHandler.php";
include "RenderBlog.php";
include "Config.php";

$config = new Config();
$connection = new DbConnector($config);

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>Viviana Vitomarco</title>
    <link rel="stylesheet" href="resrc/less/all.css" />
    <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet" type="text/css">

</head>