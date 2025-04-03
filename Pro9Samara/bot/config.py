import os

API_TOKEN = 'TOKEN'

ADMINS = ['ADM1', 'ADM2']

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
TEMP_DIR = os.path.join(BASE_DIR, 'data', 'Temp')

DELAY_BIRTH_DAY_MESSAGES = 0 # Интервал отправки уведомления о указании ДР в секундах.
DELAY_NOTIFICATION_ACTIVE_MESSAGES = 120 # Интервал отправки уведомления от времени активность в секундах.

COUPON_CODES_FILE = "CouponCodes.txt"

PHRASES = {
    "registered": "Привет, мы Вас помним, вот Ваш купон!",
    "request_user_phone": "Пожалуйста, отправьте ваш номер телефона, используя кнопку.",
    "user_sender_phone": "Спасибо!\nУкажите вашу дату рождения в формате ДД.ММ.ГГГГ.\nЕсли не хотите указывать дату рождения, или пропустите этот шаг.",
    "skip_send_birth": "Дата рождения пропущена. Вот ваш купон!",
    "user_sender_phone_birth": "Спасибо! Регистрация завершена.",
    "change_action": "Выберите действие:",
    "action_cancel": "Действие отменено.",
    "send_template_admin": "Отправьте новый шаблон (webp, jpg, jpeg, png) в виде файла. 📄",
    "success_replace_template": "Шаблон успешно заменён. 🔄",
    "sent_coupons_file": "Отправьте купоны текстом или файлом с расширением txt. 📄",
    "success_replase_coupons": "Купоны успешно загружены и перезаписаны.",

    "error_user_birth": "Некорректный формат даты, отправьте текст в формате ДД.ММ.ГГГГ или пропустите этот шаг.",
    "error_not_found_template": "Шаблонов не найдено. 🗑️",
    "error_template_not_doc": "Неверный формат файла. Загрузите файл с расширением webp, jpg, jpeg или png.",
    "error_not_found_coupons": "Файл с купонами не найден. 🗑️",
    "error_coupons_txt": "Неверный формат файла. Загрузите файл с расширением txt",

    "notification_send_birth": "Напоминаем, что вы не указали дату рождения.\nПожалуйста, укажите её в формате ДД.ММ.ГГГГ или пропустите этот шаг.",

    "btn_share_phone": "Поделиться 📱",
    "btn_get_coupon": "Получить купон 🎫",
    "btn_skip": "Пропустить ⏩",
    "btn_cancel": "Отменить ❌",
    "btn_back": "Назад ↩️",
    "btn_login": "Вы авторизированы 🔐",
    "btn_logout": "Вы вышли 🏃🚪",
    "btn_users_admin": "Пользователи 🧑🏻‍💻",
    "btn_coupons_admin": "Купоны 🎫",
    "btn_show_template_coupons": "Посмотреть шаблон 🖼️",
    "btn_import_coupons": "Загрузить купоны 📤",
    "btn_replace_template": "Заменить шаблон 🔄",
    "btn_export_coupons": "Выгрузить неисп. купоны 📥",    


    "none_CouponCode": "Купонов пока что нет, попробуйте позже. ✨",
    "generating_qr": "Секундочку... ⏳",

}


# ---- NO USLES ----
DAYS_INACTIVE_THRESHOLD = 7  # Количество дней для проверки неактивности
REMINDER_CHECK_INTERVAL = 86400  # Интервал проверки в секундах

PAGE_SIZE_USER = 2 # Количество элементов пользователей - админ
PAGE_SIZE_REQS = 5 # Количество элементов запросов - админ
PAGE_SIZE_POSTS = 5 # Количество элементов ПОЛЕЗНОЕ и ПОСТЫ - админ

PAGE_SIZE_TOOLS = 3 # Количество элементов ПОЛЕЗНОЕ - юзер
