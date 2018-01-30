<?php

$mailTo     = 'deimonbourne@gmail.com';

$successMsg = 'Thank you, mail sent successfuly!';


$fillMsg    = 'Please fill all fields!';


$errorMsg   = 'Hm.. seems there is a problem, sorry!';


?>
    <?php
    $msg = "Name: ".$_POST['contact-name']."\r\n";
    $msg .= "Email: ".$_POST['contact-email']."\r\n";
    $msg .= "Telephone: ".$_POST['contact-phone']."\r\n";

    $success = @mail($mailTo, $_POST['contact-email'], $msg, 'From: ' . $_POST['contact-name'] . '<' . $_POST['contact-email'] . '>');
    if ($success) {
        echo '<script type="text/javascript">window.parent.$("#contact #alert-msg").html("' . $successMsg . '");
        window.parent.$("#input_name").val("");
        window.parent.$("#input_email").val("");
        window.parent.$("#input_phone").val("");
        window.parent.$("#contact #alert-msg").show();</script>';
    } 
        else {
        echo '<script type="text/javascript">window.parent.$("#contact #alert-msg").html("' . $errorMsg . '");window.parent.$("#contact #alert-msg").show();</script>';
    }

?>
