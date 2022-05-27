import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartSelectedUserBoxContentComponent } from './organization-chart-selected-user-box-content.component';

describe('OrganizationChartSelectedUserBoxContentComponent', () => {
  let component: OrganizationChartSelectedUserBoxContentComponent;
  let fixture: ComponentFixture<OrganizationChartSelectedUserBoxContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartSelectedUserBoxContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartSelectedUserBoxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
