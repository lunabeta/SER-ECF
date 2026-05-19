<?php
// contact_handler.php - Recommended: saves to database AND sends email
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "POST required"]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

if (!$input || empty($input["name"]) || empty($input["email"]) || empty($input["message"])) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$name = trim($input["name"]);
$email = trim($input["email"]);
$subject = trim($input["subject"] ?? "General Inquiry");
$message = trim($input["message"]);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Please enter a valid email address"]);
    exit;
}

$response = ["success" => true, "messages" => []];

// PART 1: Save to database (optional if config.php exists)
$configPath = __DIR__ . "/config.php";
if (file_exists($configPath)) {
    $config = require $configPath;
    $db = $config["db"] ?? null;

    if ($db) {
        try {
            $conn = new mysqli($db["host"], $db["user"], $db["pass"], $db["name"]);

            if ($conn->connect_error) {
                throw new Exception("DB connection failed");
            }

            $stmt = $conn->prepare(
                "INSERT INTO contact_submissions (name, email, subject, message, ip_address) VALUES (?, ?, ?, ?, ?)"
            );
            $ip = $_SERVER["REMOTE_ADDR"] ?? "unknown";
            $stmt->bind_param("sssss", $name, $email, $subject, $message, $ip);

            if ($stmt->execute()) {
                $response["messages"][] = "Saved to database";
            } else {
                throw new Exception($stmt->error);
            }

            $stmt->close();
            $conn->close();
        } catch (Exception $e) {
            $response["messages"][] = "Database save failed: " . $e->getMessage();
        }
    }
} else {
    $response["messages"][] = "Database skipped (config.php not found)";
}

// PART 2: Send email
$to = "southethiopiaregionalecfoa@gmail.com";
$email_subject = "Contact from $name: $subject";
$body = "You have received a new message from your website.\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n\n";
$body .= "Message:\n$message\n";
$body .= "\n---\nSent from SER-ECF contact form";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $email_subject, $body, $headers)) {
    $response["messages"][] = "Email sent successfully";
    $response["message"] = "Your message has been sent successfully!";
} else {
    $response["messages"][] = "Email sending failed";
    $response["success"] = false;
    $response["message"] = "Could not send email. Please try again later.";
}

echo json_encode($response);
