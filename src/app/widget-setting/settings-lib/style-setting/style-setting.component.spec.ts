import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSettingComponent } from './style-setting.component';

describe('StyleSettingComponent', () => {
  let component: StyleSettingComponent;
  let fixture: ComponentFixture<StyleSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
