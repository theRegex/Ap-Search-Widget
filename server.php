<?php

$jsonurl = "http://api.pv8.myleasestar.com/v2/apartment-search?coid=11204";
$json = file_get_contents($jsonurl);


echo $json;

?>