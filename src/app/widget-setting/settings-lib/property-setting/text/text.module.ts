import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/share/ng-zorro-antd.module';

@NgModule({
  declarations: [TextComponent],
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
})
export class TextModule {}
