<?php
// send_email.php - Email-only handler for the contact form
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Only POST requests allowed"]);
    exit;
}

$json = file_get_contents("php://input");
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

$name = isset($data["name"]) ? trim($data["name"]) : "";
$email = isset($data["email"]) ? trim($data["email"]) : "";
$subject = isset($data["subject"]) ? trim($data["subject"]) : "Contact Form Message";
$message = isset($data["message"]) ? trim($data["message"]) : "";

if ($name === "" || $email === "" || $message === "") {
    echo json_encode(["success" => false, "message" => "Please fill in all required fields"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Please enter a valid email address"]);
    exit;
}

$to = "southethiopiaregionalecfoa@gmail.com";
$email_subject = "New Contact: $subject from $name";
$email_body = "You have received a new message from your website.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n";
$email_body .= "Message:\n$message\n";
$email_body .= "\n---\nSent from your website contact form";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(["success" => true, "message" => "Your message has been sent successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Server error: Could not send email. Please try again later."]);
}
