const img = document.querySelector('img');
        
const ws = new WebSocket('ws://localhost:4000');
ws.onopen = () => console.log(`Connected to Websocket server at 4000`);
ws.onmessage = message => {
  img.src = message.data;
}