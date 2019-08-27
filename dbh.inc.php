<?php

$dbServername = "ec2-18-218-62-68.us-east-2.compute.amazonaws.com";
$dbUsername = "root";
$dbPassword = "jeyganesh";
$dbName = "waste";

$conn = myslqi_connect($dbServername, $dbUsername, $dbPassword, $dbName);