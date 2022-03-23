import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartToggleChildrenButtonContentComponent } from './organization-chart-toggle-children-button-content.component';

describe('OrganizationChartToggleChildrenButtonContentComponent', () => {
  let component: OrganizationChartToggleChildrenButtonContentComponent;
  let fixture: ComponentFixture<OrganizationChartToggleChildrenButtonContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationChartToggleChildrenButtonContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationChartToggleChildrenButtonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
