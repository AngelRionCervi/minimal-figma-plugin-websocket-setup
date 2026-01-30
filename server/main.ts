import { WebSocketServer } from 'ws'

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', (data) => {
    console.log('received: %s', data);
  });

  ws.send('something');
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
