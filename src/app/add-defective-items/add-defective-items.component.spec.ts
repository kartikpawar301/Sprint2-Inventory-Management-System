import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDefectiveItemsComponent } from './add-defective-items.component';

describe('AddDefectiveItemsComponent', () => {
  let component: AddDefectiveItemsComponent;
  let fixture: ComponentFixture<AddDefectiveItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDefectiveItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDefectiveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
