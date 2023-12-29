import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableLoginComponent } from './vegetable-login.component';

describe('VegetableLoginComponent', () => {
  let component: VegetableLoginComponent;
  let fixture: ComponentFixture<VegetableLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegetableLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegetableLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
