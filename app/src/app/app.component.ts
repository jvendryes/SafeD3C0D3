import { Component } from '@angular/core';

@Component({
  selector: 'sdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title:string = 'SafeDC0D3';
  version:string = '0.1.0';
  navStatus: boolean = false;

  toggleNav(): void {
    this.navStatus = !this.navStatus;
  }

  closeNav(): void {
    this.navStatus = false;
  }

}
