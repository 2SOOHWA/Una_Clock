const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    // 🎯 소프트웨어가 처음 켜질 때의 창 크기 (하늘색 사각형 비율에 맞춤)
    width: 340,
    height: 500,
    
    // 창 크기를 마음대로 조절할 수 있게 할지 여부 (false로 하면 크기 고정)
    resizable: false, 
    
    // 상단 메뉴바(File, Edit 등)를 숨겨서 깔끔한 앱처럼 보이게 만듭니다.
    autoHideMenuBar: true, 
    
    webPreferences: {
      // 로컬 파일들을 안전하게 로드하기 위한 설정
      nodeIntegration: false,
      contextIsolation: false,
      backgroundThrottling: false
    }
  })

  // 우리가 만든 웹페이지(index.html)를 프로그램 화면으로 띄웁니다!
  win.loadFile('index.html')
}

// 일렉트론이 준비되면 창을 띄웁니다.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 창이 모두 닫히면 프로그램도 완전히 종료합니다.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})