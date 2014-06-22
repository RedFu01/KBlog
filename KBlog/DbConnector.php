<?php

	class DbConnector {
		public function DbConnector ( $config ) {
			mysql_connect ($config->getNodeValue("server"), $config->getNodeValue("userName"), $config->getNodeValue("password")) or die ("keine Verbindung möglich. Benutzername oder Passwort sind falsch<br/>");
			//
			mysql_select_db("thesenseoffashion") or die ("Die Datenbank existiert nicht.");
		}

	}
?>