import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsSettingItemComponent } from './columns-setting-item.component';

describe('ColumnsSettingItemComponent', () => {
  let component: ColumnsSettingItemComponent;
  let fixture: ComponentFixture<ColumnsSettingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsSettingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsSettingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
