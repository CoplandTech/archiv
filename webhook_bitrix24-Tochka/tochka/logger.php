<?php

// Функция для записи сообщений в лог
function writeToLog($message, $logFilePath) {
    // Записываем сообщение в указанный файл лога
    file_put_contents($logFilePath, date('Y-m-d H:i:s') . ' | ' . $message . PHP_EOL, FILE_APPEND);
}

// Функция для записи данных из Bitrix24 в лог CRM
function writeBitrixDataToLog($bitrixData) {
    $message = "-----Данные из CRM-----\n";
    $message .= "ID Сделки: " . $bitrixData['id'] . "\n";
    $message .= "Сумма: " . $bitrixData['amount'] . " " . shortenCurrency($bitrixData['currency']) . "\n";
    $message .= "Счёт: " . $bitrixData['paymentPurpose'] . "\n";
    writeToLog($message, 'log.txt');
}

// Функция для записи данных для запроса к банку в лог Bank
function writeBankDataToLog($bankData) {
    $message = "-----Данные в Банк-----\n";
    $message .= "Сумма: " . $bankData['Data']['amount'] / 100 . " " . shortenCurrency($bankData['Data']['currency']) . "\n";
    $message .= "Счёт: " . $bankData['Data']['paymentPurpose'] . "\n";
    writeToLog($message, 'log.txt');
}

// Функция для записи данных из ответа банка в лог Bank
function writeBankResponseToLog($bankResponse) {
    $message = "-----Данные из Банка-----\n";
    $message .= "Данные из ответа банка: " . $bankResponse . "\n";
    writeToLog($message, 'log.txt');
}

?>
