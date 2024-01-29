import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectiveItemsListComponent } from './defective-items-list.component';

describe('DefectiveItemsListComponent', () => {
  let component: DefectiveItemsListComponent;
  let fixture: ComponentFixture<DefectiveItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefectiveItemsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectiveItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
