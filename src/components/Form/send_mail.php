<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/PHPMailer.php";
    require "PHPMailer/src/Exception.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $body = $name . " ". $email . " " . $message;
    $theme = "[Заявка с формы]"

    $mail->addAddress("kenform@bk.ru");   // Здесь введите Email, куда отправлять

    $mail->Subject = $theme;
    $mail->Body = $body;
    $mail->send();

    if (!$mail->send()) {
        $message = "Ошибка отправки";
    } else {
        $message = "Данные отправлены!";
    }
	


?>