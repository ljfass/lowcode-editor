import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzIconModule } from "ng-zorro-antd/icon";
import {
  DeleteOutline,
  DeleteFill,
  DragOutline,
  FormOutline,
  RightOutline,
  LeftOutline,
  DownOutline,
  UpOutline,
} from "@ant-design/icons-angular/icons";
import { IconDefinition } from "@ant-design/icons-angular";
import { ShareModule } from "./share/share.module";
import { FormsModule } from "@angular/forms";

const icons: IconDefinition[] = [
  DeleteOutline,
  DragOutline,
  FormOutline,
  DeleteFill,
  RightOutline,
  DownOutline,
  UpOutline,
  RightOutline,
  LeftOutline,
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    NzIconModule.forRoot(icons),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
