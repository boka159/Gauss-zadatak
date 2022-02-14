import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

visibleSidebar1: any;

  constructor(private primengConfig: PrimeNGConfig, private router: Router) { }

  ngOnInit(): void {
  }
  Movies(pageName: string): void {this.router.navigate([`${pageName}`]);
  }
  }

