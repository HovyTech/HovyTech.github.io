<?php
$ip = $_SERVER['REMOTE_ADDR'];
$pagina = $_SERVER['REMOTE_URI'];
$datum = date(m-d-y / H:i:s);
$invoegen = $datum . " - " . $ip . " - " . $pagina . "<br />";
$fopen = fopen("iplog.html", "a");
fwrite($fopen, $invoegen);
fclose($fopen);
?>