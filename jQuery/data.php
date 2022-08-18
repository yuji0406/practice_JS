<?php
$data = [
    [
        'name' => 'Taro',
        'mail' => 'Taro@tes.com',
        'tel' => '000-0000-0000',
    ],
    [
        'name' => 'Jiro',
        'mail' => 'Jiro@tes.com',
        'tel' => '000-0000-0000',
    ],
    [
        'name' => 'Saburo',
        'mail' => 'Saburo@tes.com',
        'tel' => '000-0000-0000',
    ]
];

$id = $_GET['id'] * 1;
if ($id < count($data)) {
    $result = $data[$id];
} else {
    $result = $data[0];
}
header('Content-type:application/json; charset=utf8');
echo json_encode($result);