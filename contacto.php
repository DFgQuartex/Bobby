<?php

$toMail     = 'deimonbourne@gmail.com';

$successMessage = 'Thank you, mail sent successfuly!';


$fieldMsg    = 'Please fill all fields!';


$errorMessage   = 'Hm.. seems there is a problem, sorry!';


?>
    <?php
    $message = "Name: ".$_POST['name']."\r\n";
    $message .= "Email: ".$_POST['email']."\r\n";
    $message .= "Telephone: ".$_POST['phone']."\r\n";

    $successful = @mail($toMail, $_POST['email'], $message, 'From: ' . $_POST['name'] . '<' . $_POST['mail'] . '>');
    if ($successful) {
        echo '<script type="text/javascript">window.parent.$("#alert-msg").html("' . $successMessage . '");
        window.parent.$("#name1").val("");
        window.parent.$("#email1").val("");
        window.parent.$("#phone1").val("");
        window.parent.$("#alert-msg").show();</script>';
    } 
        else {
        echo '<script type="text/javascript">window.parent.$("#alert-msg").html("' . $errorMessage. '");window.parent.$("#alert-msg").show();</script>';
    }

?>
