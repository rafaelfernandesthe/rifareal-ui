import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regras-sorteio',
  templateUrl: './regras-sorteio.component.html',
  styleUrls: ['./regras-sorteio.component.scss']
})
export class RegrasSorteioComponent extends PagesBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
