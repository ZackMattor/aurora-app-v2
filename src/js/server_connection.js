const endpoint = 'ws://10.0.0.20:1338';

export class ServerConnection {
  constructor() {
    this.socket;
  }

  connect() {
    console.log('Connecting to the server');
    this.socket = new WebSocket(endpoint);

    // TODO - Reconnect on connection loss
  }

  disconnect() {
    if(this.socket && this.socket.readyState == WebSocket.OPEN) {
      console.log('Disconnecting from the server');
      this.socket.close();
      this.socket = null;
    }
  }

  send(data) {
    if(this.socket && this.socket.readyState == WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error('Server connection is not open!');
    }
  }
}
