import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {


  img: string = '';
  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;

  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';



  constructor() {

  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {

    this.loaded.emit(this.img)
  }

  ngOnChanges(chages: SimpleChanges): void {

  }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {


  }

}
