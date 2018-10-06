<?php

$method = $_SERVER['REQUEST_METHOD'];
$data;
switch ($method) {
    case 'GET':
        include 'views/home.php'; 
        break;
    default:
        echo "error";
        break;
}

?>