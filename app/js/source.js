const video = document.querySelector('video');

const constraints = { video: true };

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream
});

const getVideoFrame = () => {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const data = canvas.toDataURL('image/png');
  return data;
}

const ws = new WebSocket('ws://localhost:4000');
ws.onopen = () => {
  console.log(`Connected to Websocket server at 4000`);
  setInterval(() => {
    ws.send(getVideoFrame());
  }, 1000);
}