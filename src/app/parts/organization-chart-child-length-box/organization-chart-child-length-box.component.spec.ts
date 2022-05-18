import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartChildLengthBoxComponent } from './organization-chart-child-length-box.component';

describe('OrganizationChartChildLengthBoxComponent', () => {
  let component: OrganizationChartChildLengthBoxComponent;
  let fixture: ComponentFixture<OrganizationChartChildLengthBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartChildLengthBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartChildLengthBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
