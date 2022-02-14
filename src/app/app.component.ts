import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .5em;
        }
    `]
})
export class AppComponent {visibleSidebar1: any;

constructor (private primengConfig: PrimeNGConfig) {};

  title = 'Gauss-zadatak';
}
