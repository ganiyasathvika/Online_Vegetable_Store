import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieEditComponent } from './veggie-edit.component';

describe('VeggieEditComponent', () => {
  let component: VeggieEditComponent;
  let fixture: ComponentFixture<VeggieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeggieEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeggieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
