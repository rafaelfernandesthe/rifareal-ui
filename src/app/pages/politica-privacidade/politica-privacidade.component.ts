import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-privacidade',
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.scss']
})
export class PoliticaPrivacidadeComponent extends PagesBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
