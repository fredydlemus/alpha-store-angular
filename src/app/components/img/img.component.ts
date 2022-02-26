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
    console.log('change just img');
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';



  constructor() {
    console.log('COnstructor', 'imgValue => ', this.img);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('img loaded');
    this.loaded.emit(this.img)
  }

  ngOnChanges(chages: SimpleChanges): void {
    console.log('ngOnChanges', 'imgValue => ', this.img);
    console.log('changes', chages);
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'imgValue => ', this.img);

  }

  ngAfterViewInit(): void {
    console.log('ngAfterInit', 'imgValue => ', this.img);
  }

  ngOnDestroy(): void {
    console.log('onDestroy');

  }

}
