import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/single.service';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/services/data-type/commen.types';
import { Observable, forkJoin } from 'rxjs';
import { take, first } from 'rxjs/internal/operators';

type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]]

@Injectable({
  providedIn: 'root',
})

export class HomeResolverService implements Resolve<HomeDataType> {
  constructor(
    private homeService: HomeService,
    private singerService: SingerService,
  ) {}
  resolve(): Observable<HomeDataType> {
    return forkJoin([
      this.homeService.getBanners(),
      this.homeService.getHotTags(),
      this.homeService.getPersonalSongSheet(),
      this.singerService.getEnterSingers(),
    ]).pipe(first());
  }
}
