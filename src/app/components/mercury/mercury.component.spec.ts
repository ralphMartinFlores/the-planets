import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercuryComponent } from './mercury.component';

describe('MercuryComponent', () => {
  let component: MercuryComponent;
  let fixture: ComponentFixture<MercuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
