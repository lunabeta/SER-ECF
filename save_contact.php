<?php
// save_contact.php - Saves form submissions to MySQL (requires config.php)
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

$configPath = __DIR__ . "/config.php";
if (!file_exists($configPath)) {
    echo json_encode(["success" => false, "message" => "Server not configured. Copy config.example.php to config.php"]);
    exit;
}

$config = require $configPath;
$db = $config["db"] ?? null;

if (!$db) {
    echo json_encode(["success" => false, "message" => "Database configuration missing"]);
    exit;
}

$json = file_get_contents("php://input");
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$subject = trim($data["subject"] ?? "General Inquiry");
$message = trim($data["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

try {
    $conn = new mysqli($db["host"], $db["user"], $db["pass"], $db["name"]);

    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare(
        "INSERT INTO contact_submissions (name, email, subject, message, ip_address) VALUES (?, ?, ?, ?, ?)"
    );
    $ip_address = $_SERVER["REMOTE_ADDR"] ?? "unknown";

    $stmt->bind_param("sssss", $name, $email, $subject, $message, $ip_address);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Saved to database"]);
    } else {
        throw new Exception("Database error: " . $stmt->error);
    }

    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
