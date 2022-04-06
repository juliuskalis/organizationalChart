import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTestPageComponent } from './layout-test-page.component';

describe('LayoutTestPageComponent', () => {
  let component: LayoutTestPageComponent;
  let fixture: ComponentFixture<LayoutTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
