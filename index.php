<?php
$ip = $_SERVER['REMOTE_ADDR'];
$page = $_SERVER['REMOTE_URI'];
$date = date(m-d-y / H:i:s);
$insert = $date . " - " . $ip . " - " . $page . "<br />";
$open = fopen(“log.html", "a");
fwrite($open, $insert);
fclose($open);
?>