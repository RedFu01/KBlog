<?php
/**
* PhpHandler is an interface to provide content data between backend and frontend.
* Functions have to return an error message. (ERROR_OK, ERROR_FAILED).
*/
class Database {
	private $config = null;

	public function PhpHandler( $conf ) {
		$this->config = $conf;
	}

	/**  		***UNUSED***
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

	/** 		***UNUSED***
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

	/** 		***UNUSED***
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

	/** 		***UNUSED***
	* function returns all data of a Page.
	*
	* @param uid id of content owner can also be a page id
	* @param numPost numer of posts to be returned
	* @return blogpostArr - 2 dimensional Array. first colum contains postContent, second column contains postType.
	*/
	public function getPage( $pid ) {

		$request = mysql_query( "SELECT * FROM pages WHERE id='".$pid."'" );
		$page = mysql_fetch_array( $request, MYSQL_ASSOC );
		//print_r($page);
		return($page);
	}

	/**
	* function returns all modules of a Page.
	*
	* @param uid id of content owner can also be a page id
	* @param numPost numer of posts to be returned
	* @return object of all modules listet on a page
	*/
	public function getPageModules( $pid ) {

		$request = mysql_query( "SELECT modules FROM pages WHERE id='".$pid."'" );
		$page = mysql_fetch_array( $request, MYSQL_ASSOC );
		return(json_decode($page["modules"]));
	}

	/**
	* function returns all modules and content of a Page.
	*
	* @param uid id of content owner can also be a page id
	* @param numPost numer of posts to be returned
	* @return blogpostArr - 3 dimensional Array:
	*		moduleList[$i][0]first colum contains boolean (0 = false, 1 = true) this boolean shows that modules contains contentparts witch have to be loaded, 
	*		second column contains name of module template, 
	*		third column contains content data (including contentparts).
	*/

	public function getModules( $pid, $ownerId ) {

		$request = mysql_query( "SELECT templateId, data, contentpart FROM modules WHERE pageId='".$pid."' AND ownerId = '".$ownerId."'" );

		$i=0;
		$moduleList = null;
		while($module = mysql_fetch_array( $request, MYSQL_ASSOC )){
			$moduleList[$i][0] = $module["contentpart"];
			$moduleList[$i][1] = $module["templateId"];
			$moduleList[$i][2]= json_decode($module["data"], true);
			$i++;
		}
		return($moduleList);
	}

	public function getContentParts( $data ) {
		return array_keys($data);
	}
}
?>

