<?php

$mailTo     = 'deimonbourne@gmail.com';

$successMsg = 'Thank you, mail sent successfuly!';


$fillMsg    = 'Please fill all fields!';


$errorMsg   = 'Hm.. seems there is a problem, sorry!';


?>
<?php
if(
    !isset($_POST['contact-name']) ||
	!isset($_POST['contact-company-name']) ||
    !isset($_POST['contact-email']) ||
    !isset($_POST['contact-phone']) ||
    !isset($_POST['contact-budget']) ||
	!isset($_POST['contact-type']) ||
    !isset($_POST['contact-message']) ||
    empty($_POST['contact-name']) ||
	empty($_POST['contact-company-name']) ||
    empty($_POST['contact-email']) ||
	empty($_POST['contact-phone']) ||
    empty($_POST['contact-budget']) ||
	empty($_POST['contact-type']) ||
    empty($_POST['contact-message']) 
) {
    echo '<script type="text/javascript">window.parent.$("#contact #alert-msg").html("' . $fillMsg . '");window.parent.$("#contact #alert-msg").show();</script>';
} else {

    ?>
    <?php
	$msg = "Name: ".$_POST['contact-name']."\r\n";
	$msg .= "Company: ".$_POST['contact-company-name']."\r\n";
	$msg .= "Email: ".$_POST['contact-email']."\r\n";
	$msg .= "Telephone: ".$_POST['contact-phone']."\r\n";
	$msg .= "Budget: ".$_POST['contact-budget']."\r\n";
	$msg .= "Type: ".$_POST['contact-type']."\r\n";
	$msg .= "Objectives: ".$_POST['contact-message']."\r\n";

    $success = @mail($mailTo, $_POST['contact-email'], $msg, 'From: ' . $_POST['contact-name'] . '<' . $_POST['contact-email'] . '>');
    if ($success) {
        echo '<script type="text/javascript">window.parent.$("#contact #alert-msg").html("' . $successMsg . '");
		window.parent.$("#input_name").val("");
		window.parent.$("#input_compnay_name").val("");
		window.parent.$("#input_email").val("");
		window.parent.$("#input_phone").val("");
		window.parent.$("#input_budget").val("");		
		window.parent.$("#input_type").val(""); 
		window.parent.$("#textarea_message").val(""); 
		window.parent.$("#contact #alert-msg").show();</script>';
    } 
		else {
        echo '<script type="text/javascript">window.parent.$("#contact #alert-msg").html("' . $errorMsg . '");window.parent.$("#contact #alert-msg").show();</script>';
    }

}
