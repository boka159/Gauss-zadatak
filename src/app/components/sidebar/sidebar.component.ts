import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`]
})
export class SidebarComponent implements OnInit {

  visibleSidebar1: any;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  }

}
