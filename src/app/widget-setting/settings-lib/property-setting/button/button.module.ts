import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/share/ng-zorro-antd.module';
import { TextComponent } from './text/text.component';
import { TypeComponent } from './type/type.component';
import { SizeComponent } from './size/size.component';
import { ShapeComponent } from './shape/shape.component';
import { GhostComponent } from './ghost/ghost.component';
import { DisableComponent } from './disable/disable.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TextComponent,
    TypeComponent,
    SizeComponent,
    ShapeComponent,
    GhostComponent,
    DisableComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
})
export class ButtonModule {}
