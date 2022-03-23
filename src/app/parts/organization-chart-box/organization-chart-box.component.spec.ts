import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartBoxComponent } from './organization-chart-box.component';

describe('OrganizationChartBoxComponent', () => {
  let component: OrganizationChartBoxComponent;
  let fixture: ComponentFixture<OrganizationChartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
