import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  selected = 0;
  interval = null;
  constructor() { }

  ngOnInit() {
    this.runCarousel();
  }
  next() {
    if (this.selected < 3) {
      this.selected += 1;
    } else {
      this.selected = 0;
    }
  }
  previous() {
    if (this.selected > 0) {
      this.selected -= 1;
    } else {
      this.selected = 3;
    }
  }
  runCarousel() {
    this.interval = setInterval(() => {
      if (this.selected < 3) {
        this.selected += 1;
      } else {
        this.selected = 0;
      }
    }, 3000);
  }
}
