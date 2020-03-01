import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-netease-carousel',
  templateUrl: './netease-carousel.component.html',
  styleUrls: ['./netease-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeteaseCarouselComponent implements OnInit {
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type);
  }
}
