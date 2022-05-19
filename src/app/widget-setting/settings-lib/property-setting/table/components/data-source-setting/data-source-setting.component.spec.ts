import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceSettingComponent } from './data-source-setting.component';

describe('DataSourceSettingComponent', () => {
  let component: DataSourceSettingComponent;
  let fixture: ComponentFixture<DataSourceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSourceSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSourceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
