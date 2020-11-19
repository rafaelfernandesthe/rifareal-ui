import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent extends PagesBaseComponent implements OnInit {

  sorteioPrincipal: any;

  constructor() {
    super();
   }

  ngOnInit() {
    const img = $('.bg_img');
    img.css('background-image', function() {
      const bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });

    this.sorteioPrincipal = {
      subtitulo_linha1: 'Iphone 11 64gb Red POR',
      destaque_linha2: 'R$ 25',
      texto_linha3: `Esta é sua grande oportunidade de adquirir um Iphone 11 64gb Red,
        o sorteio acontecerá no dia 15/12/2020 pela Loteria Federal da Caixa.`,
      textoBotao: 'Comprar Agora!',
      urlBotao: 'rifa-detalhe/CIP003',
      urlVideo: '',
      imagem: '/assets/images/premios/iphone11-red-select-2019.png',
      altImagem: 'Iphone 11',
    };
  }

}
