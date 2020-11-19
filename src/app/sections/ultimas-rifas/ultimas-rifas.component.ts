import { Rifa } from './../../core/model';
import { PagesBaseComponent } from './../../pages/pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimas-rifas',
  templateUrl: './ultimas-rifas.component.html',
  styleUrls: ['./ultimas-rifas.component.scss']
})
export class UltimasRifasComponent extends PagesBaseComponent implements OnInit {

  ultimasRifas: Rifa[];

  constructor() {
    super();
  }

  ngOnInit() {

    this.ultimasRifas = [
      {
        status: 'DISPONÍVEL',
        codigo: 'CIP003',
        descricao: 'Iphone 11 64gb Red',
        valor: 25,
        diasTotal: 7,
        diasRestantes: 7,
        rifasTotal: 200,
        rifasRestantes: 190,
        dataFim: '2020/11/05',
        imagem: '/assets/images/premios/iphone11-red-select-2019.png'
      } as Rifa,
      {
        status: 'DISPONÍVEL',
        codigo: 'CIP002',
        descricao: 'Iphone 11 128gb Branco',
        valor: 25,
        diasTotal: 7,
        diasRestantes: 6,
        rifasTotal: 200,
        rifasRestantes: 190,
        dataFim: '2020/11/05',
        imagem: '/assets/images/premios/iphone11-white-select-2019.png'
      } as Rifa,
      {
        status: 'ENCERRADA',
        codigo: 'CIP001',
        descricao: 'Iphone XR 64gb Branco',
        valor: 25,
        diasTotal: 7,
        diasRestantes: 0,
        rifasTotal: 200,
        rifasRestantes: 50,
        dataFim: '2020/11/05',
        imagem: '/assets/images/premios/iphone-xr-white-select-201809.png'
      } as Rifa,
    ];

  }

}
