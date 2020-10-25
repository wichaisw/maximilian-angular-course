import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // choose attribute selector instead of tag element
  // selector: '[app-servers]',

  // choose selector by class
  // selector: '.app-servers',
  
// selector by ID & pseudor i.e. hover ใช้ไม่ได้

  // templateUrl: './servers.component.html',
  // ถ้าจะtemplate ตัดบรรทัดต้องใช้ backtick
  template: `<h1>inline template</h1>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
