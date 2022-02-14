import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

visibleSidebar1: any;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  }

}
