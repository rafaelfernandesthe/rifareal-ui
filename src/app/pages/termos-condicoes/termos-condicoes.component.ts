import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos-condicoes',
  templateUrl: './termos-condicoes.component.html',
  styleUrls: ['./termos-condicoes.component.scss']
})
export class TermosCondicoesComponent extends PagesBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
