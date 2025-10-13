import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jwt } from './jwt';

describe('Jwt', () => {
  let component: Jwt;
  let fixture: ComponentFixture<Jwt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jwt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jwt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
