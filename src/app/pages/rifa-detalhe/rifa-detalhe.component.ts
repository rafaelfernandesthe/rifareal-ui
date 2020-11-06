import { RifaService } from './../../services/rifa.service';
import { NumeroRifa, Rifa, StatusNumeroRifa } from './../../core/model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-rifa-detalhe',
  templateUrl: './rifa-detalhe.component.html',
  styleUrls: ['./rifa-detalhe.component.scss']
})
export class RifaDetalheComponent implements OnInit, OnDestroy {

  codigo: string;
  public rifa: Rifa;
  private sub: any;
  public todosNumeros: any = new Array();
  public numerosSelecionados: any = new Array();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.todosNumeros = new Array();
    this.sub = this.route.params.subscribe(params => {
      this.codigo = params.codigo;

      // this.rifaService.load(this.codigo).then( result => {
      //   this.rifa = result;
      // });

      this.rifa = {
        status: 'DISPONÍVEL',
        codigo: 'CIP003',
        descricao: 'Iphone 11 64gb Red',
        valor: 25,
        diasTotal: 7,
        diasRestantes: 7,
        rifasTotal: 200,
        rifasRestantes: 190,
        dataFim: '2020/11/10',
        imagem: '/assets/images/premios/iphone11-red-select-2019.png'
      } as Rifa;

      $('.clock').countdown(this.rifa.dataFim, function(event) {
        $(this).html(event.strftime(''
          + '<div><span>%D</span><p>Dias</p></div>'
          + '<div><span>%H</span><p>Horas</p></div>'
          + '<div><span>%M</span><p>Minutos</p></div>'
          + '<div><span>%S</span><p>Segundos</p></div>'));
      });

      const percentual = (100 - (this.rifa.rifasRestantes * 100 / this.rifa.rifasTotal)) + '%';
      $('.progressbar').each(function() {
        $(this).find('.bar').animate({
          width: percentual
        }, 3000);
      });

      for ( let i = 0; i < this.rifa.rifasTotal; ) {
        let s = StatusNumeroRifa.DISPONIVEL;

        if ( i % 17 === 0) {
          s = StatusNumeroRifa.COMPRADO;
        }

        if ( i % 33 === 0) {
          s = StatusNumeroRifa.RESERVADO;
        }

        const obj = {
          valor: ++i,
          status: s,
        } as NumeroRifa;

        this.todosNumeros.push(obj);
      }

   });

  }

  getValorStr(valor: number) {
    return (valor + '').padStart(3, '0');
  }

  getClassByStatus( statusNumber: number ) {
    switch (statusNumber) {
      case 1: return 'available';
      case 2: return 'reserved';
      case 3: return 'purchased';
    }
    return '';
  }

  onAdd(event, numero: NumeroRifa) {
    if (numero.status !== 1) {
      this.ngOnInit();
      return;
    }

    $('.lottery-single__body .lottery-single__number li:nth-child(' + this.getValorStr(numero.valor) + ')').removeClass('selected');
    if ( this.numerosSelecionados.indexOf(numero) === -1 ) {
      this.numerosSelecionados.push(numero);
      $('.lottery-single__body .lottery-single__number li:nth-child(' + this.getValorStr(numero.valor) + ')').addClass('selected');
    } else {
      this.numerosSelecionados = this.numerosSelecionados.filter(n => n !== numero);
    }

    this.numerosSelecionados = this.numerosSelecionados.sort((n1, n2) => {
      return n1.valor - n2.valor;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
