<?php
	/*
	* PhpHandler is an interface to provide content data between backend and frontend.
	* Functions have to return an error message. (ERROR_OK, ERROR_FAILED).
	*/
	class Database {
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

		public function getModuleIdList() {
			$request = mysql_query( "SELECT id FROM modules " );

			$moduleIdList = null;

			$i=0;

			while ( $moduleId = mysql_fetch_array( $request, MYSQL_ASSOC)) {
				$moduleIdList[$i] = ($moduleId["id"]);
				$i++;
			}

			return $moduleIdList;
		}

		/*
		* function returns all content elements of a Page.
		*
		* param uid id of content owner can also be a page id
		* param numPost numer of posts to be returned
		* @return blogpostArr - 2 dimensional Array. first colum contains postContent, second column contains postType.
		*/
		public function getPage( $pid ) {

			$request = mysql_query( "SELECT modules FROM pages WHERE id='".$pid."'" );
			$page = mysql_fetch_array( $request, MYSQL_ASSOC );

			return($page);
		}

		/*
		* function returns all Modules of a Page.
		*
		* param uid id of content owner can also be a page id
		* param numPost numer of posts to be returned
		* @return blogpostArr - 2 dimensional Array. first colum contains postContent, second column contains postType.
		*/

		public function getModules( $pid, $ownerId ) {

			$request = mysql_query( "SELECT data FROM modules WHERE pageId='".$pid."' AND ownerId = '".$ownerId."'" );

			//$module = mysql_fetch_array( $request, MYSQL_ASSOC );
			$i=0;
			$moduleList = null;
			while($module = mysql_fetch_array( $request, MYSQL_ASSOC )){
				$moduleList[$i]= $module["data"];
				$i++;
			}

			return($moduleList);
		}

		public function getElementbyId( $id ) {
			return( mysql_fetch_row ( mysql_query ( "SELECT ContentData FROM content WHERE id = '".$id."'" ))[0] );
		}

	}


			//$page = null; //Array

			// while ( $page = mysql_fetch_array( $request, MYSQL_ASSOC )) {

			// 	$decodeJson = json_decode( $page["modules"] );
			// 	$i=0;
			// 	foreach( $decodeJson->elements as $rows ) {
			// 	 	$blogpostArr[$i]["postContent"] = $this->getElementbyId($rows->id);
			// 	 	$blogpostArr[$i]["postType"] = $rows->type;
			// 	 	$i++;
			// 	}
			// 	$page[$j] = $blogpostArr;
			// 	$j++;
			// }
			// print_r($page);
?>

