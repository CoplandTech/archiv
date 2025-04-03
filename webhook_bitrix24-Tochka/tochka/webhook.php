<?php
// Установка вывода ошибок
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Подключение библиотек JWT и JWK
require_once __DIR__ . '/lib/JWT.php';
require_once __DIR__ . '/lib/JWK.php';
require_once __DIR__ . '/lib/Key.php';

// Получение тела вебхука
$entityBody = file_get_contents("php://input");

// Публичный ключ Точки
$json_key = '{"kty":"RSA","e":"AQAB","n":"rwm77av7GIttq-JF1itEgLCGEZW_zz16RlUQVYlLbJtyRSu61fCec_rroP6PxjXU2uLzUOaGaLgAPeUZAJrGuVp9nryKgbZceHckdHDYgJd9TsdJ1MYUsXaOb9joN9vmsCscBx1lwSlFQyNQsHUsrjuDk-opf6RCuazRQ9gkoDCX70HV8WBMFoVm-YWQKJHZEaIQxg_DU4gMFyKRkDGKsYKA0POL-UgWA1qkg6nHY5BOMKaqxbc5ky87muWB5nNk4mfmsckyFv9j1gBiXLKekA_y4UwG2o1pbOLpJS3bP_c95rm4M9ZBmGXqfOQhbjz8z-s9C11i-jmOQ2ByohS-ST3E5sqBzIsxxrxyQDTw--bZNhzpbciyYW4GfkkqyeYoOPd_84jPTBDKQXssvj8ZOj2XboS77tvEO1n1WlwUzh8HPCJod5_fEgSXuozpJtOggXBv0C2ps7yXlDZf-7Jar0UYc_NJEHJF-xShlqd6Q3sVL02PhSCM-ibn9DN9BKmD"}';
$jwks = json_decode($json_key, true, 512, JSON_THROW_ON_ERROR);

// Декодирование JWT
try {
    $decoded = \Firebase\JWT\JWT::decode($entityBody, \Firebase\JWT\JWK::parseKey($jwks, "RS256"));
} catch (\UnexpectedValueException $e) {
    // Неверная подпись, вебхук не от Точки или с ним что-то не так
    echo "Invalid webhook";
}

// Преобразование в массив
$decoded_array = (array) $decoded;

// Путь к файлу, куда будут записаны данные
$file_path = "webhook_data.txt";

// Преобразование расшифрованных данных в формат JSON
$json_data = json_encode($decoded_array, JSON_PRETTY_PRINT);

// Запись данных в файл
file_put_contents($file_path, $json_data, FILE_APPEND);

// Отправка успешного ответа серверу
http_response_code(200);
?>
