import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-type/commen.types';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { SingerService } from 'src/app/services/single.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  carouselActiveIndex = 0;
  banners: Banner[];
  hotTags: HotTag[];
  songSheets: SongSheet[];
  singers: Singer[];

  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  constructor(
    private homeService: HomeService,
    private singerService: SingerService
  ) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalSongSheet();
    this.getEnterSingers();
  }

  private getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  private getHotTags() {
    this.homeService.getHotTags().subscribe(tags => {
      this.hotTags = tags;
    });
  }

  private getPersonalSongSheet() {
    this.homeService.getPersonalSongSheet().subscribe(sheets => {
      this.songSheets = sheets;
    });
  }

  private getEnterSingers() {
    this.singerService.getEnterSingers().subscribe(singers => {
      this.singers = singers;
    });
  }



  ngOnInit() {
  }

  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }

}
