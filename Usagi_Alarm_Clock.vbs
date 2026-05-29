Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c .\electron_bin\electron.exe .", 0, False
set WshShell = Nothing