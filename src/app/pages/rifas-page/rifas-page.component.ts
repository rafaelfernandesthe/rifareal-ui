import { RodapeComponent } from './../../@template/rodape/rodape.component';
import { RifaService } from './../../services/rifa.service';
import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Rifa } from './../../core/model';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-rifas-page',
  templateUrl: './rifas-page.component.html',
  styleUrls: ['./rifas-page.component.scss']
})
export class RifasPageComponent extends PagesBaseComponent implements OnInit {

  todasRifas: Rifa[];

  constructor(private rifaService: RifaService) {
    super();
  }

  ngOnInit() {

    this.rifaService.listarTodas().then(result => {
      this.todasRifas = result;
    });

  }

}
