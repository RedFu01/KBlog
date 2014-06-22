<?php

	class DbConnector {
		public function DbConnector () {
			mysql_connect ("localhost", "root", "") or die ("<br/>keine Verbindung möglich. Benutzername oder Passwort sind falsch<br/>");
			mysql_select_db("thesenseoffashion")or die ("Die Datenbank existiert nicht.");
			echo "<br/>connectet to thesenseoffashion<br/>";
		}

	}
	/*function getConnectionString() {

		$path = realpath(dirname(__FILE__));
		$configpath = $path."/test.xml";

		$xmlString = file_get_contents($configpath);
		$xml = new SimpleXMLElement($xmlString);
		$connectionStrings = $xml->xpath('/connectionStrings/add');
		echo $connectionStrings['connectionString'];

	}*/
?>