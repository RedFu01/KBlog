<?php
		class Template {
		/* param location template location either "Module" or "Contentpart"
		*  param tmplName name of the requestet template
		*
		*/
		public function getTemplate($location, $moduleArray) {
			$tmplArray = null;
			$i=0;
			foreach ($moduleArray as $tmplName) {
				$file = "../".$location." Templates/".$tmplName.".html";
				$tmplArray[$i] = file_get_contents($file);
				$i++;
			}
			return $tmplArray;
		}
	}
?>