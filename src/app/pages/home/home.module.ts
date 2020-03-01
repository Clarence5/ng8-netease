import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { HomeComponent } from './home.component';
import { NeteaseCarouselComponent } from './component/netease-carousel/netease-carousel.component';


@NgModule({
  declarations: [HomeComponent, NeteaseCarouselComponent],
  imports: [
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
