import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieCreateComponent } from './veggie-create.component';

describe('VeggieCreateComponent', () => {
  let component: VeggieCreateComponent;
  let fixture: ComponentFixture<VeggieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeggieCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeggieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
