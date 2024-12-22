// Example JavaScript Code
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input, select");
    const submitButton = document.querySelector("button");
    
    form.addEventListener("submit", function (even<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    
    
    
    $phone = htmlspecialchars($_POST['phone']);
    $courses = htmlspecialchars($_POST['courses']);
    
    
    
    // Display the registration success message with the entered data
    echo "
    
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Registration Successful</title>
    <style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 50px;
    }
    
    .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
    text-align: center;
    color: #333;
    }
    
    h2 {
    text-align: center;
    color: #4CAF50;
    }
    
    p {
    font-size: 1.1em;
    margin: 10px 0;
    color: #333;
    }
    
    .button {
    display: block;
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    
    
    
    
    text-align: center;
    text-decoration: none;
    font-size: 1.1em;
    }
    
    .button:hover {
    background-color: #45a049;
    }
    </style>
    </head>
    <body>
    <div class='container'>
    <h1>Thank You for Registering!</h1>
    <h2>Registration Successful!</h2>
    <p><strong>Name:</strong> " . $name . "</p>
    <p><strong>Email:</strong> " . $email . "</p>
    <p><strong>Phone:</strong> " . $phone . "</p>
    <p><strong>Course Enrolled:</strong> " . $courses . "</p>
    <a href='index.html' class='button'>Go Back to Registration Form</a>
    </div>
    </body>
    </html>";
    } else {
    echo "Invalid request method.";
    }
    ?>
    t) {
    event.preventDefault(); // Prevent default submission
    
    let isValid = true;
    inputs.forEach((input) => {
    if (!input.value) {
    isValid = false;
    alert(`${input.name || "Field"} is required.`);
    }
    });
    
    if (isValid) {
    alert("Form submitted successfully!");
    form.submit(); // Submit the form if valid
    }
    });
    });
    