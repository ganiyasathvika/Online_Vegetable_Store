import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableSignUpComponent } from './vegetable-sign-up.component';

describe('VegetableSignUpComponent', () => {
  let component: VegetableSignUpComponent;
  let fixture: ComponentFixture<VegetableSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegetableSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegetableSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
