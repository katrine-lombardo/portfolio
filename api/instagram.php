<?php

$url = 'https://www.instagram.com/domino_and_badingo/';

$html = file_get_contents($url);

$doc = new DOMDocument();
@$doc->loadHTML($html);

$xpath = new DOMXPath($doc);
$element = $xpath->query("//*[@element-id='203']")->item(0);

$data = $element ? $element->textContent : null;

header('Content-Type: application/json');
echo json_encode(['data' => $data]);
?>
