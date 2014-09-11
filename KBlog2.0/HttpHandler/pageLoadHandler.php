<?php
	include "../Config.php";
	
	include "../Classes/Database.php";
	include "../Classes/DbConnector.php";
	include "../Classes/Template.php";

	header("Content-type: application/json");

	//$pageId = $_GET["pageId"];
	//$cpList = $_GET["cpList"];
	//$moduleList = $_GET["moduleList"];
	$pageId = 1;
	$moduleList = array("headlin");
	$cpList = array("headline");
	/*
	* 	Init objects.
	*/
	$config = new Config();
	$connection = new DbConnector( $config );
	$db = new Database( $config );
	$tmplObj = new Template();

	/*
	*	Load page
	*/

	$page = $db->getPageModules($pageId);

	/*
	* 	Compare and load module templates
	*/
	//print_r($page);
	$pageModules = array();
	$cpModules = array();
	$newMdTmplArr = array();
	$newCpTmplArr = array();
	$newDataArr= array();
	$modules = null;

	$modules = $db->getModules($page[0], 1);
	//print_r($modules[1]);
	foreach ( $modules as $key => $module ) {
		array_push($pageModules, $module[1]);
		if( $module[0] == 0 ) {
			$newDataArr[$module[0]] = $module[2];
			/* get module templates */
			if ( !in_array( $module[1],  $moduleList )) {

				$tmpl = $tmplObj->getModuleTemplate( $module[1] );
				if( $tmpl != null ) {
					$newMdTmplArr[$module[1]] = $tmpl;
				}
			}
		} else if ( $module[0] == 1 ) {
			if ( !in_array( $module[1],  $moduleList )) {

				
				/* get module templates */
				$tmpl = $tmplObj->getModuleTemplate( $module[1] );
				if( $tmpl != null ) {
					$newMdTmplArr[$module[1]] = $tmpl;
				}

				/* get contentpart templates */
				$contentparts = $db->getContentParts($module[2]);

				foreach ($contentparts as $key => $cp) {
					array_push($cpModules, $cp);
					if ( !in_array( $cp,  $cpList )) {
						$cpTmpl = $tmplObj->getCpTemplate( $cp );
						if( $cpTmpl != null ) {
							$newCpTmplArr[ $cp ] = $cpTmpl;
						}
					}
					/*get data*/
					$newDataArr[ $module[0] ] = $module[2];
				}
			}
		}
	}

	$pageArr = array();
	$pageArr["page"] = $pageModules;
	$pageArr["cp"] = $cpModules;
	$pageArr["mdTmpl"] = $newMdTmplArr;
	$pageArr["cpTmpl"] = $newCpTmplArr;
	$pageArr["data"] = $newDataArr;
	
	echo json_encode($pageArr);
	// todo save templates in front end and render data