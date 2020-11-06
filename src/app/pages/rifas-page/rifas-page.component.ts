import { Rifa } from './../../core/model';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-rifas-page',
  templateUrl: './rifas-page.component.html',
  styleUrls: ['./rifas-page.component.scss']
})
export class RifasPageComponent implements OnInit {

  todasRifas: Rifa[];

  constructor() {}

  ngOnInit() {

    this.todasRifas = [
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
