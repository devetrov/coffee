<?php

$dataForm = file_get_contents("php://input");
$file_name = "../reviews/reviews.json";

if ($dataForm == '' || $dataForm == NULL) {
    return false;
}

if (!file_exists($file_name)) {
    fopen($file_name, "w+");
}

$file = file_get_contents($file_name);

if ($file == '' || $file == NULL) {
    $json_file = [];
} else {
    $json_file = json_decode($file);
}

$json_data = json_decode($dataForm);

array_push($json_file, $json_data);

file_put_contents($file_name, json_encode($json_file));
