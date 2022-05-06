import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetLibComponent } from "../widget-lib/widget-lib.component";
import { WidgetButtonComponent } from "../widget-lib/widget/widget-button/widget-button.component";
import { WidgetComponent } from "../widget-lib/widget/widget.component";
import { ContenteditableDirective } from "../directives/contenteditable/contenteditable.directive";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "./ng-zorro-antd.module";
import { WidgetSettingModule } from "../widget-setting/widget-setting.module";
import { WidgetTextComponent } from "../widget-lib/widget/widget-text/widget-text.component";
import { WidgetRightCornerActionComponent } from "../components/widget-right-corner-action/widget-right-corner-action.component";
import { NzIconModule } from "ng-zorro-antd/icon";
import { WidgetDatePickerComponent } from "../widget-lib/widget/widget-date-picker/widget-date-picker.component";

const components = [
  WidgetButtonComponent,
  WidgetTextComponent,
  WidgetDatePickerComponent,
  WidgetComponent,
  WidgetLibComponent,
  WidgetRightCornerActionComponent,
];

const directives = [ContenteditableDirective];

@NgModule({
  declarations: [...components, ...directives],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzIconModule,
    WidgetSettingModule,
    FormsModule,
  ],
  exports: [WidgetSettingModule],
})
export class EditorModule {}
