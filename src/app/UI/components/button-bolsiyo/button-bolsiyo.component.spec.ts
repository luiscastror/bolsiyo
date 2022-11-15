import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBolsiyoComponent } from './button-bolsiyo.component';

describe('ButtonBolsiyoComponent', () => {
  let component: ButtonBolsiyoComponent;
  let fixture: ComponentFixture<ButtonBolsiyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBolsiyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBolsiyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
