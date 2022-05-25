import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartSelectedUserBoxComponent } from './organization-chart-selected-user-box.component';

describe('OrganizationChartSelectedUserBoxComponent', () => {
  let component: OrganizationChartSelectedUserBoxComponent;
  let fixture: ComponentFixture<OrganizationChartSelectedUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartSelectedUserBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartSelectedUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
