import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sdc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string;
    version: string;
    navStatus: boolean;

    toggleNav(): void {
        this.navStatus = !this.navStatus;
    }

    closeNav(): void {
        this.navStatus = false;
    }

    ngOnInit(): void {
        this.title = 'SafeD3C0D3';
        this.version = '0.1.4';
        this.navStatus = false;
    }
}
