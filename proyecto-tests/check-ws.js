const WebSocket = require('ws');

const ws = new WebSocket('wss://oauth-alfajorgr01-7e4fe:64f8ab20-9c2f-4bda-9a36-fbad0558a858@ondemand.us-west-1.saucelabs.com/playwright/v1');

ws.on('open', () => {
  console.log('WebSocket conectado!');
  ws.close();
});

ws.on('error', (err) => {
  console.error('Error de WebSocket:', err.message);
});
