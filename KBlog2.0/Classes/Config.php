<?php
	class Config {
		private $filePath = "../config.xml";

		/* param searchVal - value of the node to search
		*  (optional) attrName - to look for attribute
		*  (optional) child - childNode of attribute
		*/
		public function getValue($searchVal, $attrName=null, $child=null) {
			if (file_exists($this->filePath)) {
				$hasChild = false;
				$config = new DOMDocument();
				$config->preserveWhiteSpace = FALSE;
				$config->load($this->filePath);

				$searchObj = $config->getElementsByTagName($searchVal);

				if($attrName == null || $child == null) {
					foreach ($searchObj as $n) {
						if($n->hasChildNodes() > 1){break;}
						$value = $n->nodeValue;
					}
				} else {
					foreach ($searchObj as $n) {
				       if ($n->getAttribute('name')==$attrName) {
				       	foreach ($n->childNodes as $cn) {
					       if ($cn->nodeName == $child) {
					       	$value = $cn->nodeValue;
					       }
						}
				       }
					}
				}
			//echo $value;
			return $value;
			} else {
			   	exit('can not find config file!');
			}
		}
	}
?>

