<?php
// Textlocal account details
$username = urlencode('aroshamudalige1@gmail.com');
$hash = urlencode('LV2Mooye8qM-9BZNrzEf8Z9LYfDIHrLTrCrTRz7Kt8');

// Message details
$numbers = urlencode(94770177440);
$sender = urlencode('Arosha Mudalige');
$message = rawurlencode('This is your message');

// Prepare data for POST request
$data = 'username=' . $username . '&hash=' . $hash . '&numbers=' . $numbers . "&sender=" . $sender . "&message=" . $message;

// Send the GET request with cURL
$ch = curl_init('http://api.txtlocal.com/send/?' . $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Process your response here
echo $response;
?>
