const { app, BrowserWindow, ipcMain } = require('electron');
const { fork } = require('child_process');
const path = require('path');

let mainWindow;
let serverProcess;

function createWindow() {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"), // Update if a preload script is used
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
  
    // Load the `index.html` file from the `public` directory
    mainWindow.loadFile(path.join(__dirname, "../public/index.html"));

  ipcMain.on('start-server', () => {
    if (!serverProcess) {
      serverProcess = fork(path.join(__dirname, 'server.js'));
      console.log('Server started');
    }
  });

  ipcMain.on('stop-server', () => {
    if (serverProcess) {
      serverProcess.kill();
      serverProcess = null;
      console.log('Server stopped');
    }
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
