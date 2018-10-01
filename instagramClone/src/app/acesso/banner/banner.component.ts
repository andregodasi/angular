import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Image } from './image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ],
})
export class BannerComponent implements OnInit {
  estado = 'escondido';
  imagens: Image[] = [
    new Image('visivel', 'assets/img_1.png'),
    new Image('escondido', 'assets/img_2.png'),
    new Image('escondido', 'assets/img_3.png'),
    new Image('escondido', 'assets/img_4.png'),
    new Image('escondido', 'assets/img_5.png'),
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  logicaRotacao() {
    let idx: number;
    for (let i = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        idx = i === 4 ? 0 : i + 1;
        break;
      }
    }
    this.imagens[idx].estado = 'visivel';
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  toogleEstado() {
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel';
  }

}
