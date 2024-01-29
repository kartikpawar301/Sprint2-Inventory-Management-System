import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectiveItemsDetailsComponent } from './defective-items-details.component';

describe('DefectiveItemsDetailsComponent', () => {
  let component: DefectiveItemsDetailsComponent;
  let fixture: ComponentFixture<DefectiveItemsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefectiveItemsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectiveItemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
