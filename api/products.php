<?php

// Database credentials
$host = 'localhost'; // Your database server host (if it's the same machine)
$port = '3306'; // Your database server port (default is 3306)
$username = 'ian'; // Your database username
$password = 'O0$17xo4b'; // Your database password
$database = 'testdb'; // Your database name

// Connect to MySQL
$mysqli = new mysqli($host, $username, $password, $database, $port);
if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

// Perform the database query
$query = "SELECT * FROM products";
$result = $mysqli->query($query);

// Prepare data for JSON encoding
$data = array();
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    $result->free();
} else {
    echo "Error executing query: " . $mysqli->error;
}

// Close the MySQL connection
$mysqli->close();

// Send data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
