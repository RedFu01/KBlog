<?php 
	/*
	* PhpHandler is an interface to provide content data between backend and frontend.
	* Functions have to return an error message. (ERROR_OK, ERROR_FAILED).
	*/
	class PhpHandler {
		private $config = null;

		public function PhpHandler($conf) {
			$this->config = $conf;
		}

		/*
		* param table - table where content should be inserted
		* param data
		*/
		public function addToTable ( $table, $val1=null, $val2=null, $val3=null ){ 
			$sqlQuery = $config->getQuery( $table );
			switch ($table) {
				case 'content':
					mysql_query($config->getQuery( $table )."(".$val1.")") or die ("Failed to add content!");
					break;
				case 'blogpost':
					mysql_query($sqlQuery."('".$val1."','".$val2."','".$val3."')") or die ("Failed to add content!");
					break;
				case 'usertable':
					mysql_query($sqlQuery."('".$val1."','".$val2."')") or die ("Failed to add content!");
					break;
				default:
					break;
			}
		}

		/*
		* param id
		* param data
		*/
		public function updateTable ( $id ){
			mysql_query("UPDATE `content` SET `ContentData` = 'testChanged' WHERE id='".$id."'") or die ("Failed to update content!");
		}

		/*
		* param id
		*/
		public function deleteContent ( $id ){
			mysql_query("DELETE FROM `content` WHERE id = '".$id."'");
		}
		public function imageUploader ( $img ){
			echo "works";
		}

		/*
		* function returns all content elements of one blogpost.
		*
		* param uid id of content owner can also be a page id
		* param numPost numer of posts to be returned
		* @return blogpostArr - 2 dimensional Array. first colum contains postContent, second column contains postType.
		*/
		public function getBlogpost($uid, $numPost, $startId=null) {

			$request = mysql_query("SELECT * FROM blogpost WHERE uid='".$uid."' AND id > '".$startId."'");

			$userPosts = null; //Array
			$j=0;
			while ($post = mysql_fetch_array($request, MYSQL_ASSOC)) {

				if ($numPost <= $j){break;}

				//echo "<pre>";
			    //print_r($post);
			    //echo "</pre>";

				$decodeJson = json_decode($post["postContent"]);
				$i=0;
				// echo "<pre>";
				// print_r($decodeJson);
				// echo "</pre>";
				foreach($decodeJson->elements as $rows)
				{
				 	$blogpostArr[$i]["postContent"] = $this->getElementbyId($rows->id);
				 	$blogpostArr[$i]["postType"] = $rows->type;
				 	$i++;
				}
				// echo "<pre>";
				// print_r($blogpostArr);
				// echo "</pre>";

				$userPosts[$j] = $blogpostArr;
				$j++;
			}
			
			// echo "<pre>";
			// print_r($blogpostArr);
			// echo "</	pre>";

			return($userPosts);
		}

		public function getElementbyId($id) {
			return(mysql_fetch_row(mysql_query("SELECT ContentData FROM content WHERE id = '".$id."'"))[0]);
		}

	}
?>