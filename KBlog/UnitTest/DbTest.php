	
<?php
include "../DbConnector.php";
include "../PhpHandler.php";
include "../RenderBlog.php";	

$connection = new DbConnector();

$handler = new PhpHandler();

$postContents = $handler->getBlogpost('2');

//print_r($postContents);

$renderer = new RenderBlog();

$renderer->renderBlogPost($postContents);
?>