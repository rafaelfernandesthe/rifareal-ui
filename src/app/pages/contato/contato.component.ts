import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent extends PagesBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
