<?php

require_once 'config.php';
require_once 'logger.php';

// Функция для сокращения обозначения валюты
function shortenCurrency($currency) {
    switch ($currency) {
        case 'Российский рубль':
            return 'RUB';
        // Добавьте другие валюты по мере необходимости
        default:
            return $currency;
    }
}

// Функция для обновления сделки в Bitrix24 с загрузкой файла
function updateDealInBitrixWithFile($bitrixData, $imageName, $imageContent) {
    // Обновляем сделку в Bitrix24
    global $Webhook_Token;
    $updateDealUrl = $Webhook_Token;

    $updateData = array(
        'id' => $bitrixData['id'],
        'fields' => array(
            'UF_CRM_ID' => array(
                'fileData' => array(
                    $imageName,
                    $imageContent
                )
            )
        )
    );

    $updateHeaders = array(
        'Content-Type: application/json'
    );

    $updateCh = curl_init();
    curl_setopt($updateCh, CURLOPT_URL, $updateDealUrl);
    curl_setopt($updateCh, CURLOPT_HTTPHEADER, $updateHeaders);
    curl_setopt($updateCh, CURLOPT_POST, true);
    curl_setopt($updateCh, CURLOPT_POSTFIELDS, json_encode($updateData));
    curl_setopt($updateCh, CURLOPT_RETURNTRANSFER, true);
    $updateResponse = curl_exec($updateCh);
    curl_close($updateCh);

    // Записываем ответ об обновлении сделки в лог
    writeToLog("-----Ответ об обновлении сделки-----\n" . $updateResponse, 'log.txt');
}

// Получаем данные из запроса Bitrix24
$bitrixData = array(
    'id' => isset($_GET['id']) ? $_GET['id'] : '',
    'amount' => isset($_GET['amount']) ? intval($_GET['amount']) : 0, // Переводим в целое число
    'currency' => isset($_GET['currency']) ? $_GET['currency'] : '',
    'paymentPurpose' => isset($_GET['paymentPurpose']) ? $_GET['paymentPurpose'] : ''
);

// Записываем данные из Bitrix24 в лог CRM
writeBitrixDataToLog($bitrixData);

// Преобразуем сумму в копейки
$amountInKopecks = $bitrixData['amount'] * 100;

// Формируем данные для запроса к банку
$bankData = array(
    'Data' => array(
        'amount' => $amountInKopecks, // Записываем сумму в копейках
        'currency' => shortenCurrency($bitrixData['currency']),
        'paymentPurpose' => $bitrixData['paymentPurpose'],
        'qrcType' => '02',
        'imageParams' => array(
            'width' => 300,
            'height' => 300,
            'mediaType' => 'image/png'
        ),
        'sourceName' => 'CRM Bitrix24',
        'ttl' => 1440,
    )
);

// Записываем данные для запроса к банку в лог Bank
writeBankDataToLog($bankData);

// Отправляем данные в банк
$bankUrl = $URL_Tochka . $QR_API_URL . $Register_Qr_Code;
$bankHeaders = array(
    'Authorization: ' . $JTW_API_Tochka,
    'Content-Type: application/json',
);

$bankCh = curl_init();
curl_setopt($bankCh, CURLOPT_URL, $bankUrl);
curl_setopt($bankCh, CURLOPT_HTTPHEADER, $bankHeaders);
curl_setopt($bankCh, CURLOPT_POST, true);
curl_setopt($bankCh, CURLOPT_POSTFIELDS, json_encode($bankData));
curl_setopt($bankCh, CURLOPT_RETURNTRANSFER, true);
$bankResponse = curl_exec($bankCh);
curl_close($bankCh);

// Записываем ответ от банка и результат в файл
writeBankResponseToLog($bankResponse);

// Получаем содержимое изображения из ответа банка
$bankResponseData = json_decode($bankResponse, true);
$imageContent = $bankResponseData['Data']['image']['content'];

// Обновляем сделку в Bitrix24 с полученным изображением
updateDealInBitrixWithFile($bitrixData, "QR_payment-dealID-" . $bitrixData['id'] . ".PNG", $imageContent);

// Выводим сообщение об успешной записи
echo "Данные успешно записаны в файл log.txt";

?>
