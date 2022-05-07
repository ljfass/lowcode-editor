import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextComponent } from "./text.component";
import { FormsModule } from "@angular/forms";
import { ShareModule } from "src/app/widget-setting/components/share.module";

@NgModule({
  declarations: [TextComponent],
  imports: [CommonModule, ShareModule, FormsModule],
})
export class TextModule {}
