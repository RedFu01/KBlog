<?php
	class RenderBlog {
		include "../DbConnector.php";
		include "../PhpHandler.php";
		include "../RenderBlog.php";
		}

		public function renderBlogPost($blogpostArr) {
			$i=0;
			$postString = "<section class= data-template-id= data-content-id=>";
			foreach($blogpostArr as $rows) {
				switch ($blogpostArr[$i]["postType"]) {
					case "headline":
						$postString .= '<h2 data-field-name="headline">'.$blogpostArr[$i]["postContent"].'</h2>
            							<span data-field-name="date">6/04/2014</span>';
						break;
					case "text":
						echo $i;
						$postString .='<article data-array-name="content" data-array-index='.$i.'>'.$blogpostArr[$i]["postContent"].'</article>';
						break;
					case "image":
						$postString .='
						<figure>
						<img data-array-name="content" data-array-index='.$i.' src='.$blogpostArr[$i]["postContent"].' alt="" />
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
			$postString .= "</section>";
			echo $postString;
		}
	}
?>