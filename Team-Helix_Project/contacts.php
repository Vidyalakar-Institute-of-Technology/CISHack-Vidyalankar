<?php

$Name = $_REQUEST['name'];
$Email = $_REQUEST['email'];
$Phone = $_REQUEST['phone'];
$Subject = $_REQUEST['subject'];
$Message = $_REQUEST['message'];
$header = $Email;
if(empty($Name) && empty($Email) && empty($Subject) && empty($Message)){
    echo ('Please fill all the fields');
}
else{
    mail("Sales@insightskv.com", "Message From InsightsKV.com - ".$Subject,"Name: ".$Name."Phone: " .$Phone." Message: " .$Message." Email: ".$Email, $header);
    echo "<script type='text/javascript'> alert('Your Message sent successfully');
            window.history.go(-1);
          </script>";
}

?>
