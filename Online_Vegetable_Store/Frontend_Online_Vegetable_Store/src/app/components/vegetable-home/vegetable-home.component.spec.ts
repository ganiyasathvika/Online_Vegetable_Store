import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableHomeComponent } from './vegetable-home.component';

describe('VegetableHomeComponent', () => {
  let component: VegetableHomeComponent;
  let fixture: ComponentFixture<VegetableHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegetableHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegetableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
