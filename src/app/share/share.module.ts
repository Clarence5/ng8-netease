import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NeteaseUiModule } from './netease-ui/netease-ui.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    NeteaseUiModule,
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    NeteaseUiModule,
  ]
})
export class ShareModule { }
