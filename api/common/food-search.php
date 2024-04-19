<?php

require_once "db1.php";

$food_name = get(['query'])['query'];

$result = sql_fetch("SELECT * FROM foods WHERE name LIKE '%$food_name%' or description LIKE '%$food_name%';");

echo json_encode($result);
header('Content-Type: application/json');