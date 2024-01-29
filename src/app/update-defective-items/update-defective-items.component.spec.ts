import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDefectiveItemsComponent } from './update-defective-items.component';

describe('UpdateDefectiveItemsComponent', () => {
  let component: UpdateDefectiveItemsComponent;
  let fixture: ComponentFixture<UpdateDefectiveItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDefectiveItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDefectiveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
