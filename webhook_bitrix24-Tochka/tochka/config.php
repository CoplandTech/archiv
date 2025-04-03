<?php

// Настройки API банка Точка
$JTW_API_Tochka = "JTW_TOKEN";
$URL_Tochka = "https://enter.tochka.com/uapi/";

$legalId = "LEGAL_ID";
$accountId = "ACCOUNT_ID";
$merchantId = "MERCHANT_ID";

// Настройки SANDBOX API банка Точка
$Sandbox_URL_Tochka = "https://enter.tochka.com/sandbox/v2/";
$Sandbox_API_Tochka = "Bearer working_token";

// URL-части API банка Точка
$QR_API_URL = "sbp/v1.0/qr-code/";
$Get_QR_List = "legal-entity/" . $legalId;
$Register_Qr_Code = "merchant/" .$merchantId . "/" . $accountId;
$Get_Balances_List = "open-banking/v1.0/balances";


$Webhook_Token = "WEBHOOK_TOKEN_BITRIX24";

?>
