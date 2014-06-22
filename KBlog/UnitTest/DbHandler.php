<?php
mysql_connect ("localhost", "root", "") or die ("<br/>keine Verbindung möglich. Benutzername oder Passwort sind falsch<br/>");
			mysql_select_db("thesenseoffashion")or die ("Die Datenbank existiert nicht.");

$result = mysql_query("SELECT * FROM blogpost");

while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
    printf("ID: %s  Name: %s", $row[0], $row[1]);
}

$idArr = array('Obst' => array('Orange', 'Banane', 'Apfel'),
              'Gemüse' => array('Karotte', 'Kohl', 'Erbse'));
 echo count($idArr);
?>