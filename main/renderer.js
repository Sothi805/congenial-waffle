const { ipcRenderer } = require('electron');

document.getElementById('start-server').addEventListener('click', () => {
  ipcRenderer.send('start-server');
});

document.getElementById('stop-server').addEventListener('click', () => {
  ipcRenderer.send('stop-server');
});
