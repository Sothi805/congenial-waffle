const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createMainWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Optional if you use a preload script
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    // Load the HTML file or a URL
    mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

    // Uncomment to open Developer Tools (for debugging)
    // mainWindow.webContents.openDevTools();

    // Handle the window being closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Wait until the app is ready
app.whenReady().then(createMainWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Recreate a window if the app is reactivated (macOS specific behavior)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
