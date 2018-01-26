<?php

$mailTo     = 'deimonbourne@gmail.com';

$successMsg = 'Спасибо! В ближайшее время мы Вам перезвоним';


$fillMsg    = 'Пожалуйста, заполните все поля';


$errorMsg   = 'Произошла ошибка, пожалуйста, проверьте подключение к интернету';


?>
<?php
if(
    !isset($_POST['contact-name']) ||
    !isset($_POST['contact-email']) ||
    !isset($_POST['contact-phone']) ||
    empty($_POST['contact-name']) ||
    empty($_POST['contact-email']) ||
	empty($_POST['contact-phone']) ||
) {
    echo '<script type="text/javascript">window.parent.$("#contact #alert-msg").html("' . $fillMsg . '");window.parent.$("#contact #alert-msg").show();</script>';
} else {

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

}
