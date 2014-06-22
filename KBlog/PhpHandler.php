<?php 
	/*
	* PhpHandler is an interface to provide content data between backend and frontend.
	* Functions have to return an error message. (ERROR_OK, ERROR_FAILED).
	*/
	class PhpHandler {
		public function addContent ( $id, $module, $data ){
		echo "works";
		}
		public function updateContent ( $id, $data ){
			echo "works";
		}
		public function deleteContent ( $id ){
			echo "works";
		}
		public function imageUploader ( $img ){
			echo "works";
		}
		public function loadModules ( $num, $screensize){
			echo "works";
		}



		/*
		* function returns all content elements of one blogpost.
		* @return blogpostArr - 2 dimensional Array. first colum contains postContent, second column contains postType.
		*/
		public function getBlogpost($uid) {
			$request = "SELECT * FROM blogpost WHERE uid='".$uid."'";
			$post = mysql_fetch_array(mysql_query($request));
				/*echo "hallo";
				echo $post[0]."<br/>";
				echo $post[1]."<br/>";
				echo $post[2]."<br/>";
				echo $post[3]."<br/>";*/
			$decodeJson = json_decode($post["postContent"]);
			$i=0;
			foreach($decodeJson->elements as $rows)
			{
				$blogpostArr[$i]["postContent"] = $this->getElementbyId($rows->id);
				$blogpostArr[$i]["postType"] = $rows->type;
				$i++;
			}
			/*echo "<pre>";
			print_r($blogpostArr);
			echo "</pre>";
			*/
			return $blogpostArr;
		}

		public function addToColum() {
			mysql_query("INSERT INTO blogpost('postContent', 'uid', 'visibility') VALUES ('1','2','3')");
			print_r("<br/>Write Complete<br/>");
		}

		public function getElementbyId($id) {
			return(mysql_fetch_row(mysql_query("SELECT ContentData FROM content WHERE id = '".$id."'"))[0]);
		}

	}
?>