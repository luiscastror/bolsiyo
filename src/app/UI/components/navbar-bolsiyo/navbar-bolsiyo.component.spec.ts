import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBolsiyoComponent } from './navbar-bolsiyo.component';

describe('NavbarBolsiyoComponent', () => {
  let component: NavbarBolsiyoComponent;
  let fixture: ComponentFixture<NavbarBolsiyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBolsiyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBolsiyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
