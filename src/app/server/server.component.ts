import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 3;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() >= 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
