<?php
include "dbconnection.php";
extract($_POST);
$db = new DB("php_project");
$checkquery = "SELECT * FROM admins WHERE email = '$email' && password = '$password'"

?>