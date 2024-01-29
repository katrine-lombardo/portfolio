<?php
// Use the dotenv package to load the env vars from my .env file
require __DIR__ . '/../vendor/autoload.php'; // Include the Composer autoload file

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..'); // Load the .env file from the root directory
$dotenv->load(); // Load the environment variables

// Database credentials
$host = $_ENV['DB_HOST']; // Your database server host (if it's the same machine)
$port = $_ENV['DB_PORT']; // Your database server port (default is 3306)
$username = $_ENV['DB_USERNAME']; // Your database username
$password = $_ENV['DB_PASSWORD']; // Your database password
$database = $_ENV['DB_DATABASE']; // Your database name

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
