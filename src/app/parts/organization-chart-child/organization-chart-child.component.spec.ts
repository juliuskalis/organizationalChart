import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartChildComponent } from './organization-chart-child.component';

describe('OrganizationChartChildComponent', () => {
  let component: OrganizationChartChildComponent;
  let fixture: ComponentFixture<OrganizationChartChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
