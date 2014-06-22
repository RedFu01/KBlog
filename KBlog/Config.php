<?php
	class Config {
		private $filePath = "../config.xml";

		public function getNodeValue($nodeParam) {
			if (file_exists($this->filePath)) {
				$config = new DOMDocument();
				//$config->preserveWhiteSpace = TRUE; // change to FALSE to see the difference
				$config->load($this->filePath);

				foreach ($config->getElementsByTagName($nodeParam) as $node) {
					$value = $node->nodeValue;
				}
				return $value;

			echo $config->getNodeValue("database");

			} else {
			   	exit('can not find config file!');
			}
		}
	}
?>

