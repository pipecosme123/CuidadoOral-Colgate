const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const powerMonitor = electron.powerMonitor;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    icon: path.join(__dirname, './logo192.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(isDev ?
    'http://localhost:3000' :
    `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);

  mainWindow.webContents.on('did-fail-load', () => {
    if (!isDev) {
      // Load the index URL the same way you load it above
      mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    }
  })

}

app.on('ready', () => {
  createWindow();

  const idle = powerMonitor.getSystemIdleTime();
  console.log('Current System Idle Time - ', idle);

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// const { app, BrowserWindow } = require('electron')

// const path = require('path')
// const isDev = require('electron-is-dev')

// require('@electron/remote/main').initialize()
// -c.extraMetadata.main=build/main.js
// function createWindow() {
//    // Create the browser window.
//    const win = new BrowserWindow({
//       fullscreen:true,
//       webPreferences: {
//          nodeIntegration: true,
//          enableRemoteModule: true
//       }
//    })

//    win.loadURL(
//       isDev
//          ? 'http://localhost:3000'
//          : `file://${path.join(__dirname, '../build/index.html')}`
//    )
// }

// app.on('ready', createWindow)

// // Quit when all windows are closed.
// app.on('window-all-closed', function () {
//    // On OS X it is common for applications and their menu bar
//    // to stay active until the user quits explicitly with Cmd + Q
//    if (process.platform !== 'darwin') {
//       app.quit()
//    }
// })

// app.on('activate', function () {
//    // On OS X it's common to re-create a window in the app when the
//    // dock icon is clicked and there are no other windows open.
//    if (BrowserWindow.getAllWindows().length === 0) createWindow()
// })