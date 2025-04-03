# Запуск ботов в качестве сервисов на одной машине

Этот проект предназначен в качестве шпаргалки для запуска нескольких ботов в качестве сервисов на одной машине.
Он включает в себя:
1. Файл-пример [.service](https://github.com/CoplandTech/python_bots_service/blob/main/example.service)
2. Инструкция по установке применимая для каждого .service

## Установка сервиса

1. В папке с ботом создаём папку "systemd", в ней файл "имя_бота[.service](https://github.com/CoplandTech/python_bots_service/blob/main/example.service)".
Вручную или с помощью команды
```sh
mkdir systemd
```
Содержимое:
```sh
[Unit]
Description=YOUR_DESC
After=syslog.target
After=network.target
    
[Service]
Type=simple
User=root
WorkingDirectory=/путь к директории с ботами
ExecStart=/путь к питону/bin/python3 /путь к скрипту/main.py
RestartSec=10
Restart=always
    
[Install]
WantedBy=multi-user.target
  ```

2. Далее устанавливаем подсистему инициализации и управления службами, но в большенстве случаев она уже установлена.
```sh
sudo apt-get install systemd
systemctl daemon-reload
```

3. Включаем службу, запускаем и проверяем её статус:
```sh
systemctl enable /путь_до/systemd/имя_бота.service
systemctl start имя_бота
systemctl status имя_бота
```

## Установка окружения Python

Лично я создаю окружение в директории бота чтобы иметь каждый "Проект" в одной директории.
Структура директории:
```plaintext
bots/
├── bot_1/
    ├── bot/ # Ппапка основных файлов бота
        ├── ...
        └── ...
    ├── bot_1/ # Ппапка окружения
        ├── ...
        └── ...
    ├── sysmtemd/
        └── bot_1.service
    └── requirements.txt
├── bot_2/
    ├── ...
    └── ...
└── bot_.../
```

1. Создание виртуального окружения Python
```sh
python -m venv name_venv
```

2. Активация вирутального окружения:
```sh
# For Linux or macOS:
source venv/bin/activate

# For Windows:
venv\Scripts\activate
```

3. Установка зависимостей проекта (Использование файла requirements.txt):
```sh
pip install -r requirements.txt
```

4. Запуск бота:
```sh
python директория/main.py
```
