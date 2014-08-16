<?php	
include "./blogHead.php";

$config = new Config();
$renderer = new RenderBlog();
$renderer->RenderEntireBlog( '2', new PhpHandler($config) );
?>