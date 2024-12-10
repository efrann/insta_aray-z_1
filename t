@echo off
TITLE Launcher
echo Web Server ve Data Updater başlatılıyor...
echo.

REM Çalışma dizinini belirt
cd /d "C:\Users\[kullanıcı_adı]\Desktop\asd"

REM Log klasörü için tam yol belirt
set LOG_PATH=%CD%\logs
set VENV_PATH=%CD%\venv\Scripts\activate.bat

REM Log klasörü oluştur
if not exist "%LOG_PATH%" mkdir "%LOG_PATH%"

REM Döngü script'ini oluştur
(
    echo @echo off
    echo :loop
    echo echo ========== Veri Güncellemesi Başlıyor ========== >> "%LOG_PATH%\data_update_log.txt"
    echo echo %%date%% %%time%% - Veri güncellemesi başlıyor... >> "%LOG_PATH%\data_update_log.txt"
    echo call "%VENV_PATH%"
    echo python data.py ^>> "%LOG_PATH%\data_update_log.txt" 2^>&1
    echo if errorlevel 1 (
    echo     echo HATA: data.py çalıştırılırken sorun oluştu! >> "%LOG_PATH%\data_update_log.txt"
    echo ) else (
    echo     echo Veri güncellemesi tamamlandı, 24 saat sonra tekrar çalışacak... >> "%LOG_PATH%\data_update_log.txt"
    echo     echo %%date%% %%time%% - Veri güncellemesi tamamlandı >> "%LOG_PATH%\data_update_log.txt"
    echo )
    echo timeout /t 86400 /nobreak
    echo goto loop
) > update_loop.bat

REM Web server'ı yeni pencerede başlat
start "Web Server" cmd /k ^
"echo Virtual Environment aktif ediliyor... && ^
 call "%VENV_PATH%" && ^
 echo Web Server başlatılıyor... && ^
 python web.py >> "%LOG_PATH%\web_server_log.txt" 2>&1"

REM Data updater'ı yeni pencerede başlat
start "Data Updater" cmd /k ^
"echo Virtual Environment aktif ediliyor... && ^
 call "%VENV_PATH%" && ^
 echo Data Updater başlatılıyor... && ^
 call update_loop.bat"

echo Her iki uygulama da başlatıldı.
echo Web Server ve Data Updater pencerelerini kontrol edin.
timeout /t 5

REM Döngü script'ini temizle
del update_loop.bat

exit
