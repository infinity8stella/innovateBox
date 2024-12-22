<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Collect and sanitize form data
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$courses = htmlspecialchars($_POST['courses']);


// Display the registration success message with the entered data
echo "<div class='container'>";
echo "<h2>Registration Successful!</h2>";
echo "<p><strong>Name:</strong> " . $name . "</p>";
echo "<p><strong>Email:</strong> " . $email . "</p>";
echo "<p><strong>Phone:</strong> " . $phone . "</p>";
echo "<p><strong>Course Enrolled:</strong> " . $courses . "</p>";
echo "</div>";
} else {
echo "Invalid request method.";
}
?>
