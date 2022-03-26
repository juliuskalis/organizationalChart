import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartSettingsOptionsComponent } from './organization-chart-settings-options.component';

describe('OrganizationChartSettingsOptionsComponent', () => {
  let component: OrganizationChartSettingsOptionsComponent;
  let fixture: ComponentFixture<OrganizationChartSettingsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartSettingsOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartSettingsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
