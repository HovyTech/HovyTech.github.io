<?php
  $ip = $_SERVER['REMOTE_ADDR'];
  echo '<script language="javascript">';
  echo 'alert(' . $ip . ')';
  echo '</script>';
?>
