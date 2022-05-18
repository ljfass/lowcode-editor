import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetLibComponent } from "../widget-lib/widget-lib.component";
import { WidgetButtonComponent } from "../widget-lib/widget/basic/widget-button/widget-button.component";
import { WidgetComponent } from "../widget-lib/widget/widget.component";
import { ContenteditableDirective } from "../directives/contenteditable/contenteditable.directive";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "./ng-zorro-antd.module";
import { WidgetSettingModule } from "../widget-setting/widget-setting.module";
import { WidgetRightCornerActionComponent } from "../components/widget-right-corner-action/widget-right-corner-action.component";
import { NzIconModule } from "ng-zorro-antd/icon";
import { MousemoveoutDirective } from "../directives/mousemoveout/mousemoveout.directive";
import { WidgetTextComponent } from "../widget-lib/widget/basic/widget-text/widget-text.component";
import { WidgetDatePickerComponent } from "../widget-lib/widget/basic/widget-date-picker/widget-date-picker.component";
import { WidgetTextAreaComponent } from "../widget-lib/widget/basic/widget-text-area/widget-text-area.component";
import { WidgetTableComponent } from "../widget-lib/widget/advanced/widget-table/widget-table.component";
import { ClickOutsideDirective } from "../directives/click-outside/click-outside.directive";
import { DraggableDetectAreaDirective } from "../directives/draggable-detect-area/draggable-detect-area.directive";
import { MonacoEditorModule } from "ngx-monaco-editor";

const basic = [
  WidgetTextAreaComponent,
  WidgetButtonComponent,
  WidgetTextComponent,
  WidgetDatePickerComponent,
  WidgetTableComponent,
];

const advance = [WidgetTableComponent];

const components = [
  ...basic,
  ...advance,
  WidgetComponent,
  WidgetLibComponent,
  WidgetRightCornerActionComponent,
];

const directives = [
  ContenteditableDirective,
  MousemoveoutDirective,
  DraggableDetectAreaDirective,
];

@NgModule({
  declarations: [...components, ...directives],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzIconModule,
    WidgetSettingModule,
    FormsModule,
  ],
  exports: [WidgetSettingModule, NgZorroAntdModule],
})
export class EditorModule {}
