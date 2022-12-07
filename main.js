const { app, BrowserWindow } = require('electron');

function createWindow() {
  win = new BrowserWindow({ width: 1400, height: 900 });
  win.loadFile('dist/foundry-address-book/index.html');
}

app.whenReady().then(() => {
  createWindow();
});
