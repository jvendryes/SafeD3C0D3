import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Base64Component } from './base64.component';
import { Base64DecodePipe } from '../../base64-decode.pipe';

describe('Base64Component', () => {
    let component: Base64Component;
    let fixture: ComponentFixture<Base64Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [Base64Component, Base64DecodePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Base64Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
