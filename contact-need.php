<?php
    // define variables and set to empty values
    $Fname = "";
    $Sname = "";
    $email = "";
    $subject = "";
    $concierge = "";
    $message = "";
    $Full = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $Fname = $_POST["firstname"];
        $Sname = $_POST["surname"];
        $Fname = $_POST["email"];
        $Sname = $_POST["subject"];
        $Fname = $_POST["concierge"];
        $Sname = $_POST["message"];
     
        $Full = "Your Full Name is " . $Fname . " " . $Sname;
     }
?>

<?php
echo "<h2>Thanks for contacting us</h2>";
echo $Full;
echo "<br>";
echo $email;
echo "<br>";
echo "<h4>We will get back to you in 3 days time</h4>";
?> 