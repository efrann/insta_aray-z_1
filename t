@echo off
TITLE Launcher
echo Web Server ve Data Updater baslatiliyor...
echo.

REM Çalışma dizinini belirt
cd /d "C:\Users\[kullanıcı_adı]\Desktop\asd"

REM Log klasörü için tam yol belirt
set LOG_PATH=%CD%\logs
set VENV_PATH=%CD%\venv\Scripts\activate.bat
set SCRIPT_PATH=%CD%\data.py

REM Log klasörü oluştur
if not exist "%LOG_PATH%" mkdir "%LOG_PATH%"

REM Döngü script'ini oluştur
echo @echo off > update_loop.bat
echo cd /d "C:\Users\[kullanıcı_adı]\Desktop\asd" >> update_loop.bat
echo :loop >> update_loop.bat
echo echo ========== Veri Guncellemesi Basliyor ========== >> update_loop.bat
echo echo %%date%% %%time%% - Veri guncellemesi basliyor... ^>^> "%LOG_PATH%\data_update_log.txt" >> update_loop.bat
echo call "%VENV_PATH%" >> update_loop.bat
echo python "%SCRIPT_PATH%" ^>^> "%LOG_PATH%\data_update_log.txt" 2^>^&1 >> update_loop.bat
echo if errorlevel 1 ( >> update_loop.bat
echo     echo HATA: data.py calistirilirken sorun olustu! >> update_loop.bat
echo     echo HATA: data.py calistirilirken sorun olustu! ^>^> "%LOG_PATH%\data_update_log.txt" >> update_loop.bat
echo ) else ( >> update_loop.bat
echo     echo Veri guncellemesi tamamlandi, 24 saat sonra tekrar calisacak... >> update_loop.bat
echo     echo %%date%% %%time%% - Veri guncellemesi tamamlandi ^>^> "%LOG_PATH%\data_update_log.txt" >> update_loop.bat
echo ) >> update_loop.bat
echo timeout /t 86400 /nobreak >> update_loop.bat
echo goto loop >> update_loop.bat

REM Web server'ı yeni pencerede başlat
start "Web Server" cmd /k "echo Virtual Environment aktif ediliyor... && call %VENV_PATH% && echo Web Server baslatiliyor... && python web.py >> "%LOG_PATH%\web_server_log.txt" 2>&1"

REM Data updater'ı yeni pencerede başlat
start "Data Updater" cmd /k "echo Virtual Environment aktif ediliyor... && call %VENV_PATH% && echo Data Updater baslatiliyor... && call update_loop.bat"

echo Her iki uygulama da baslatildi.
echo Web Server ve Data Updater pencerelerini kontrol edin.
timeout 5

REM Döngü script'ini temizle
del update_loop.bat

exit
