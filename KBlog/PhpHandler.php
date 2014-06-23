<?php 
	/*
	* PhpHandler is an interface to provide content data between backend and frontend.
	* Functions have to return an error message. (ERROR_OK, ERROR_FAILED).
	*/
	class PhpHandler {
		private $config = null;

		public function PhpHandler( $conf ) {
			$this->config = $conf;
		}

		/*
		* param table - table where content should be inserted
		* param val - values to be added 
		*/
		public function addToTable ( $table, $val ){ 
			$sqlQuery = $this->config;
			if ( $val == null ) {
				echo "Log: insert values not defined;"; 
				break;
			}
			$query = $sqlQuery->getValue( "table", $table, "insert" );
			$i=1;
			$query =str_replace( "table", $table, $query );
			foreach ( $val as $value ) {
				$query =str_replace( "val".$i."", $value, $query );
				$i++;
			}
			mysql_query($query) or die ( "Failed to add content!" );
		}

		/*
		* param id
		* param data
		*/
		public function updateTable ( $table, $id, $val ){
			$sqlQuery = $this->config;
			if ( $val == null || $id == null ) {
				echo "Log: insert values or id not defined"; 
				break;
			}
			$query = $sqlQuery->getValue( "table", $table, "update" );
			$i=1;
			$query =str_replace( "table", $table, $query );
			$query =str_replace( "idx", $id, $query );
			foreach ($val as $value) {
				$query =str_replace( "val".$i."", $value, $query );
				$i++;
			}
			echo $query;
			mysql_query($query) or die ( "Failed to add content!" );
		}

		/*
		* param id
		*/
		public function deleteInTable ( $table, $id ){
			$sqlQuery = $this->config;
			if ($id == null ) {
				echo "Log: id not defined"; 
				break;
			}
			$query = $sqlQuery->getValue( "table", $table, "delete" );
			$query =str_replace( "table", $table, $query );
			$query =str_replace( "idx", $id, $query );
			echo $query;
			mysql_query( $query ) or die ( "Failed to add content!" );
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
		public function getBlogpost( $uid, $numPost, $startId=null ) {

			$request = mysql_query( "SELECT * FROM blogpost WHERE uid='".$uid."' AND id > '".$startId."'" );

			$userPosts = null; //Array
			$j=0;
			while ( $post = mysql_fetch_array( $request, MYSQL_ASSOC )) {

				if ( $numPost <= $j ){
					break;
				}
				$decodeJson = json_decode( $post["postContent"] );
				$i=0;
				foreach( $decodeJson->elements as $rows ) {
				 	$blogpostArr[$i]["postContent"] = $this->getElementbyId($rows->id);
				 	$blogpostArr[$i]["postType"] = $rows->type;
				 	$i++;
				}
				$userPosts[$j] = $blogpostArr;
				$j++;
			}

			return($userPosts);
		}

		public function getElementbyId( $id ) {
			return( mysql_fetch_row ( mysql_query ( "SELECT ContentData FROM content WHERE id = '".$id."'" ))[0] );
		}

	}
?>