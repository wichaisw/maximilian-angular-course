import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // choose attribute selector instead of tag element
  // selector: '[app-servers]',

  // choose selector by class
  // selector: '.app-servers',
  
// selector by ID & pseudor i.e. hover ใช้ไม่ได้

  templateUrl: './servers.component.html',

  // ถ้าจะtemplate ตัดบรรทัดต้องใช้ backtick
  // template: `<h1>inline template</h1>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = "Untitled";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
