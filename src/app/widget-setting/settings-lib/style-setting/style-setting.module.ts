import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackgroundComponent } from "./background/background.component";
import { BorderComponent } from "./border/border.component";
import { LayoutComponent } from "./layout/layout.component";
import { PositionComponent } from "./position/position.component";
import { StyleSettingComponent } from "./style-setting.component";
import { TextComponent } from "./text/text.component";
import { FormsModule } from "@angular/forms";
import { ShareModule } from "../../components/share.module";
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
  imports: [CommonModule, ShareModule, FormsModule],
  exports: [...components],
})
export class StyleSettingModule {}
