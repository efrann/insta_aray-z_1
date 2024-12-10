@echo off
TITLE Export Job
echo Export islemi baslatiliyor...

REM Çalışma dizinini belirt
cd /d "C:\Users\[kullanıcı_adı]\Desktop\asd"

REM Virtual Environment'ı aktive et
call venv\Scripts\activate.bat

:loop
echo ========== Export Basliyor ==========
echo %date% %time% - Export baslatiliyor...

REM Export script'ini çalıştır
python export.py

if errorlevel 1 (
    echo HATA: Export sirasinda sorun olustu!
) else (
    echo Export basariyla tamamlandi!
)

echo Sonraki export 24 saat sonra calisacak...
echo.

timeout /t 86400 /nobreak
goto loop
