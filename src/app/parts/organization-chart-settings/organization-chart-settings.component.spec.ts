import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartSettingsComponent } from './organization-chart-settings.component';

describe('OrganizationChartSettingsComponent', () => {
  let component: OrganizationChartSettingsComponent;
  let fixture: ComponentFixture<OrganizationChartSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
