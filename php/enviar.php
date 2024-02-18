<?php
//VARIABLES
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$phone=$_POST['phone'];
$subject=$_POST['subject'];
$mensaje=$_POST['mensaje'];

if ($_POST) {
    $secret = "6LdOE-ooAAAAAH6yf0Cb0sIeGtwDwj53wlKgZI_8";
    $response = $_POST['g-recaptcha-response'];
    $remoteip = $_SERVER['REMOTE_ADDR'];

    $url = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}&remoteip={$remoteip}");
    $result = json_decode($url, TRUE);

    if ($result['success'] == 1) {
        // Código para procesar el formulario si el reCAPTCHA es exitoso
        echo "¡El reCAPTCHA fue verificado correctamente! Puedes procesar el formulario ahora.";
        //configuramos datos del mail
           /*  $destinatario="mescalona144@gmail.com";
            $asunto="Comentario enviado desde mi sitio";
            echo "<script> setTimeout(\"location.href='./../index.html#contact'\", 1000)</script>"; */
    } else {
        // Código para manejar el fallo del reCAPTCHA
        echo "Por favor, completa el reCAPTCHA correctamente.";
        echo "<script> setTimeout(\"location.href='./../index.html#contact'\", 1000)</script>";
    }
}

//configuramos datos del mail
$destinatario="mescalona144@gmail.com";
$asunto="Comentario enviado desde mi sitio";

//cuerpo del mail
$cuerpo.="Nombre y Apellido: ".$nombre."\n";
$cuerpo.="E-mail: ".$correo."\n";
$cuerpo.="Teléfono: ".$phone."\n";
$cuerpo.="Asunto: ".$subject."\n";
$cuerpo.="Comentario: ".$mensaje."\n";

//Vista del email
mail($destinatario,$asunto,$cuerpo);
echo $nombre, " ", $apellidos, ",", " ", "Gracias por contactarnos!";
/* echo "<script> alert('$nombre, formulario enviado con éxito')</script>";
echo "<script> setTimeout(\"location.href='./../index.html#contact'\", 1000)</script>"; */





?>
