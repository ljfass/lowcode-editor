import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelComponent } from "src/app/workspace/panel/panel.component";
import { ButtonComponent } from "../property-setting/button/button.component";
import { BackgroundComponent } from "./background/background.component";
import { BorderComponent } from "./border/border.component";
import { LayoutComponent } from "./layout/layout.component";
import { PositionComponent } from "./position/position.component";
import { StyleSettingComponent } from "./style-setting.component";
import { TextComponent } from "./text/text.component";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "src/app/share/ng-zorro-antd.module";
import { ColorPickerModule } from "ngx-color-picker";
import { ColorSketchModule } from "ngx-color/sketch";
const components = [
  StyleSettingComponent,
  LayoutComponent,
  TextComponent,
  BackgroundComponent,
  PositionComponent,
  BorderComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ColorPickerModule,
    ColorSketchModule,
    FormsModule,
  ],
  exports: [...components],
})
export class StyleSettingModule {}
