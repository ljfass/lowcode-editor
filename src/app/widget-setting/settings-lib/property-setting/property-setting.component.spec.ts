import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySettingComponent } from './property-setting.component';

describe('PropertySettingComponent', () => {
  let component: PropertySettingComponent;
  let fixture: ComponentFixture<PropertySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
