import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetSettingComponent } from './widget-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertySettingModule } from './settings-lib/property-setting/property-setting.module';
import { StyleSettingModule } from './settings-lib/style-setting/style-setting.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const components = [WidgetSettingComponent];
const nzModules = [NzTabsModule];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    StyleSettingModule,
    PropertySettingModule,
    FormsModule,
    ReactiveFormsModule,
    ...nzModules,
  ],
  exports: [...components],
})
export class WidgetSettingModule {}
