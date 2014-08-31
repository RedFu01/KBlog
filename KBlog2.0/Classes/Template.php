<?php
		class Template {
		/** 	
		*	@param tmplName name of the requestet template
		*	@return {string} returns template string
		*/
		public function getModuleTemplate($tmplName) {
			$file = "../Module Templates/".$tmplName.".html";
			if (file_exists($file)) {
				return file_get_contents($file);
			}
			return null;
		}

		/** 	
		*	@param tmplName name of the requestet template
		*	@return {string} returns template string
		*/
		public function getCpTemplate($tmplName) {
			$file = "../Contentpart Templates/".$tmplName.".html";
			if (file_exists($file)) {
				return file_get_contents($file);
			}
			return null;
		}
	}
?>