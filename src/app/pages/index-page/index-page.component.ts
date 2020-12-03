import { environment } from './../../../environments/environment';
import { RifaService } from './../../services/rifa.service';
import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent extends PagesBaseComponent implements OnInit {

  sorteioPrincipal: any = {};

  constructor(private rifaService: RifaService) {
    super();
   }

  ngOnInit() {
    const img = $('.bg_img');
    img.css('background-image', function() {
      const bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });

    this.rifaService.loadByMainPage().then(result => {
      this.sorteioPrincipal = {
        subtitulo_linha1: `${result.descricao} POR`,
        destaque_linha2: `R$ ${result.valor}`,
        texto_linha3: `Esta é sua grande oportunidade de adquirir um ${result.descricao},
          o sorteio acontecerá no dia ${result.dataSorteioStr} pela Loteria Federal da Caixa.`,
        textoBotao: 'Comprar Agora!',
        urlBotao: `rifa-detalhe/${result.codigo}`,
        urlVideo: '',
        imagem: `${environment.apiUrl}/site/product-images/${result.imagem}`,
        altImagem: result.descricao,
      };
    });
  }

}
