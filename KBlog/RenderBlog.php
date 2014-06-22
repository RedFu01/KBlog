<?php
	class RenderBlog {
		/*
		*$handler has to be object of PhpHandler class
		*/
		public function RenderEntireBlog($uid, $handler) {
				$markupString = '<!DOCTYPE html>
<body>
    <header>
        <nav>
            <a href="blog_annika.html"><img src="Media/nav-1.jpg" /><span>ANNIKA</span></a><a href="blog_viviana.html"><img src="Media/nav-2.jpg" /><span>VIVIANA</span></a>
        </nav>
    </header>
    <div class="main">
        <!-- BLOG HEADLINE -->';
        //<h1>VIVIANA VITOMARCO</h1>
        //$markupString .= getUserName($uid);
    $markupString .= '<span class="email"><a href="mailto:viviana_vitomarco@the-sense-of-fashion.com">viviana_vitomarco@the-sense-of-fashion.com</a></span>
        <!-- Start Blogpost-->';

	$markupString .= $this->postRepeater($uid, $handler);
	
	$markupString .= '<!-- End Blogpost -->
    </div>
    <footer>
        POWERD BY KnK
    </footer>
</body>
</html>
';
			echo $markupString;
		}

		public function postRepeater($uid, $handler, $startId = null) {
			
			if($startId==null) { $startId=0; }

			$allPosts = "";
			$id=0;
			$posts = $handler->getBlogpost($uid, 5, $startId);
			foreach ($posts as $post) {
				$allPosts .= $this->renderBlogPost($post, $id);
				$id++;
			}
			return $allPosts;
		}

		public function renderBlogPost($blogpostArr, $contentId) {
			$i=0;
			$postString = '<section class="blogpost" data-template-id="0" data-content-id="'.$contentId.'">';
			foreach($blogpostArr as $rows)
			{
				switch ($blogpostArr[$i]["postType"]) {
					case "headline":
						$postString .= '<h2 data-field-name="headline">'.$blogpostArr[$i]["postContent"].'</h2>
	<span data-field-name="date">6/04/2014</span>';
						break;
					case "text":
						$postString .='<article data-array-name="content" data-array-index='.$i.'>'.$blogpostArr[$i]["postContent"].'</article>';
						break;
					case "image":
						$postString .='<figure data-array-name="content" data-array-index='.$i.'>
	<img src='.$blogpostArr[$i]["postContent"].' alt="" />
	    <figcaption>
	        Image Description 1
	    </figcaption>
	</figure>';
						break;
					
					default:

						break;
				}
				$i++;
			}
			$postString .= '<div class="social-media">
    <span class="facebook"></span>
    <span class="twitter"></span>
    <span class="pinterest"></span>
    <span class="google"></span>
</div></section>';
			return $postString;
		}

		public function cropImage($imagePath, $screensize) {
			$width = getimagesize($imagePath)[0];
			$height = getimagesize($imagePath)[1];
			
			$cropFactor = $width/$screensize;
			$newData["x"] = 0;
			$newData["y"] = 0;
			$newData["width"] = $width;
			$newData["height"] =$height;

			$image_p = imagecreatetruecolor($newData["width"], $newData["height"]);
			$image = imagecreatefromjpeg($imagePath);
			//imagecopyresized($image_p, $image, 0, 0, 0, 0, $newSize["width"], $newSize["height"], $width, $height);
			$newImg = imagecrop($image, $newData);
			// Output
			imagejpeg($newImg, "../Media/test.jpg");

			$myimage = resizeImage($imagePath, $width, $height);
			print $myimage;
			
		}
	}
?>