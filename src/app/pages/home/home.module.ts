import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { HomeComponent } from './home.component';
import { NeteaseCarouselComponent } from './component/netease-carousel/netease-carousel.component';
import { MemberCardComponent } from './component/member-card/member-card.component';


@NgModule({
  declarations: [HomeComponent, NeteaseCarouselComponent, MemberCardComponent],
  imports: [
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
