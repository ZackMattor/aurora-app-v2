const endpoint = 'ws://10.0.0.20:1338';

export class ServerConnection {
  constructor() {
    this.socket;
  }

  connect() {
    this.socket = new WebSocket(endpoint);
  }

  send(data) {
    if(this.socket && this.socket.readyState == WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error('Server connection is not open!');
    }
  }
}
