<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$allowedReferers = ['https://www.radioterapeut.ro', 'https://radioterapeut.ro'];
$refererOk = false;

if (isset($_SERVER['HTTP_REFERER'])) {
    foreach ($allowedReferers as $allowed) {
        if (stripos($_SERVER['HTTP_REFERER'], $allowed) === 0) {
            $refererOk = true;
            break;
        }
    }
}

if (!$refererOk) {
    http_response_code(403);
    exit('Referer neautorizat.');
}

// 🔒 Verificare Google reCAPTCHA
$recaptchaSecret = '6LeSnyArAAAAACb3IvUWneekV6w7W-fzXLyEBBxT'; // secret key din Google reCAPTCHA
$recaptchaResponse = $_POST['g-recaptcha-response'] ?? '';

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}");
$responseData = json_decode($verify);

if (!$responseData->success) {
    http_response_code(403);
    exit('Verificarea CAPTCHA a eșuat.');
}


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$config = require __DIR__ . '/../backend/config.php';  

$mail = new PHPMailer(true);

try {
    
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'html';
    // 📤 Setări server SMTP Gmail
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    // 📩 Expeditor și destinatar
    $mail->setFrom('programari.cirimpeitatiana@gmail.com', 'Programare Radioterapie');
    $mail->addAddress('programari.cirimpeitatiana@gmail.com');

    // ✉️ Conținut email
    $mail->isHTML(true);
   $mail->Subject = 'Programare: ' . htmlspecialchars($_POST['name']) . ' ' . htmlspecialchars($_POST['surname']);

    $mail->Body    = '
        <b>Nume:</b> ' . htmlspecialchars($_POST['name']) . '<br>
        <b>Prenume:</b> ' . htmlspecialchars($_POST['surname']) . '<br>
        <b>Email:</b> ' . htmlspecialchars($_POST['email']) . '<br>
        <b>Telefon:</b> ' . htmlspecialchars($_POST['phone']) . '<br>
        <b>Mesaj:</b><br>' . nl2br(htmlspecialchars($_POST['message'])) . '
    ';

    $mail->send();
    echo 'success';
} catch (Exception $e) {
    http_response_code(500);
    echo "Eroare: {$mail->ErrorInfo}";
}
?>