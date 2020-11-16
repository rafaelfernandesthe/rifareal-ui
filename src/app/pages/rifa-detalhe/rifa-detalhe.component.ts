import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { RifaService } from './../../services/rifa.service';
import { NumeroRifa, Rifa, StatusNumeroRifa, OrdemDeCompra } from './../../core/model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-rifa-detalhe',
  templateUrl: './rifa-detalhe.component.html',
  styleUrls: ['./rifa-detalhe.component.scss']
})
export class RifaDetalheComponent extends PagesBaseComponent implements OnInit, OnDestroy {

  codigo: string;
  public rifa: Rifa;
  private sub: any;
  public todosNumeros: any = new Array();
  public numerosSelecionados: any = new Array();
  public percentual: string;
  public ordemDeCompra: OrdemDeCompra = new OrdemDeCompra();

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.ordemDeCompra = new OrdemDeCompra();
    this.todosNumeros = new Array();
    this.numerosSelecionados = new Array();
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
        rifasRestantes: 50,
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

      this.percentual = (100 - (this.rifa.rifasRestantes * 100 / this.rifa.rifasTotal)) + '%';

      for ( let i = 0; i < this.rifa.rifasTotal; i++) {
        let s = StatusNumeroRifa.DISPONIVEL;

        if ( i % 17 === 0) {
          s = StatusNumeroRifa.COMPRADO;
        }

        if ( i % 33 === 0) {
          s = StatusNumeroRifa.RESERVADO;
        }

        const obj = {
          valor: i,
          status: s,
        } as NumeroRifa;

        this.todosNumeros.push(obj);
      }
    });

    $(window).on('scroll', () => {
      if ($('#cart')[0].hidden === false) {
        $('#scroll-to-top-icon').removeClass('scroll-to-top');
      } else {
        $('#scroll-to-top-icon').addClass('scroll-to-top');
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

    $('.lottery-single__body .lottery-single__number li:nth-child(' + (numero.valor + 1) + ')').removeClass('selected active');
    if ( this.numerosSelecionados.indexOf(numero) === -1 ) {
      this.numerosSelecionados.push(numero);
      $('.lottery-single__body .lottery-single__number li:nth-child(' + (numero.valor + 1) + ')').addClass('selected');
    } else {
      this.numerosSelecionados = this.numerosSelecionados.filter(n => n !== numero);
    }

    this.numerosSelecionados = this.numerosSelecionados.sort((n1, n2) => {
      return n1.valor - n2.valor;
    });

    this.onShowHideCart();
  }

  onShowHideCart() {
    if (this.numerosSelecionados.length > 0) {
      $('#cart').slideDown('fast');
    } else {
      $('#cart').slideUp('fast');
    }
  }

  comprarRifa() {
    if (this.numerosSelecionados.length === 0) {
      return;
    }

    $('#purchaseModal').modal('show');

  }

  getNumerosSelecionadosView() {
    return this.numerosSelecionados.map(n => this.getValorStr(n.valor)).join();
  }

  onSubmit() {
    this.ordemDeCompra.numeros = this.numerosSelecionados;
    this.ordemDeCompra.valorTotal = this.rifa.valor * this.ordemDeCompra.numeros.length;

    // SAVE DATABASE ACTION!!
    // TODO

    // EMAIL TO ADMIN ACTION!!
    // TODO

    // WHATSAPP CLIENT ACTION!!
    window.open(
      'https://api.whatsapp.com/send?lang=pt_br&phone=+5511945477715&text='
      + 'Rifa: ' + this.rifa.descricao
      + '%0ANúmero(s) Comprado(s): ' + this.ordemDeCompra.numeros.map(n => this.getValorStr(n.valor)).join()
      + '%0AValor Total: R$ ' + this.ordemDeCompra.valorTotal + ',00'
      + '%0ANome: ' + this.ordemDeCompra.nome
      + '%0ACPF: ' + this.ordemDeCompra.cpf
      + '%0ATelefone: ' + this.ordemDeCompra.telefone,
      '_blank'
    );

    $('#purchaseModal').modal('hide');
    $('#purchaseModalConfirm').modal('show');
    this.ngOnInit();
    this.onShowHideCart();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
