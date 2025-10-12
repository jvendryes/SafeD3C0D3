import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sdc-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SafeD3C0D3');
  protected readonly version = signal('1.0.0');
  protected navStatus = false;
  faLock = faLock;

  toggleNav(): void {
      this.navStatus = !this.navStatus;
  }

  closeNav(): void {
      this.navStatus = false;
  }

}
