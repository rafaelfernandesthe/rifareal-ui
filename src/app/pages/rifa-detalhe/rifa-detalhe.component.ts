import { NumeroRifaService } from './../../services/numero-rifa.service';
import { environment } from './../../../environments/environment';
import { OrdemDeCompraService } from './../../services/ordem-de-compra.service';
import { PagesBaseComponent } from './../pages-base/pages-base.component';
import { RifaService } from './../../services/rifa.service';
import { NumeroRifa, Rifa, OrdemDeCompra } from './../../core/model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-rifa-detalhe',
  templateUrl: './rifa-detalhe.component.html',
  styleUrls: ['./rifa-detalhe.component.scss']
})
export class RifaDetalheComponent extends PagesBaseComponent implements OnInit, OnDestroy {

  codigo: string;
  public rifa: Rifa = new Rifa();
  private sub: any;
  public todosNumeros: any = new Array();
  public numerosSelecionados: any = new Array();
  public percentual: string;
  public ordemDeCompra: OrdemDeCompra = new OrdemDeCompra();
  public dataSorteioStr: string;
  public numeroSelecionadoMostrar = new NumeroRifa();

  constructor(private route: ActivatedRoute, private rifaService: RifaService,
              private ordemDeCompraService: OrdemDeCompraService, private numeroRifaService: NumeroRifaService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.ordemDeCompra = new OrdemDeCompra();
    this.todosNumeros = new Array();
    this.numerosSelecionados = new Array();
    this.sub = this.route.params.subscribe(params => {
      this.codigo = params.codigo;

      this.rifaService.loadByCodigo(this.codigo).then( result => {
        this.rifa = result;
        this.rifa.imagem = `${environment.apiUrl}/site/product-images/${this.rifa.imagem}`;
        this.rifa.dataSorteio = new Date(this.rifa.dataSorteio);
        this.dataSorteioStr = `${this.rifa.dataSorteio.getFullYear()}/${this.rifa.dataSorteio.getMonth() + 1}/${this.rifa.dataSorteio.getDate()}`;
        $('.clock').countdown(this.dataSorteioStr, function(event) {
          $(this).html(event.strftime(''
            + '<div><span>%D</span><p>Dias</p></div>'
            + '<div><span>%H</span><p>Horas</p></div>'
            + '<div><span>%M</span><p>Minutos</p></div>'
            + '<div><span>%S</span><p>Segundos</p></div>'));
        });

        const percentTmp = 100 - (this.rifa.rifasRestantes * 100 / this.rifa.rifasTotal);
        if (('' + percentTmp).indexOf('.') === -1) {
          this.percentual = percentTmp + '%';
        } else {
          this.percentual = percentTmp.toFixed(1) + '%';
        }

        this.rifa.numeros = this.rifa.numeros.sort((n1, n2) => n1.valor - n2.valor);

        this.todosNumeros = this.todosNumeros.concat(this.rifa.numeros);

      });

      $(window).on('scroll', () => {
        if ($('#cart')[0] && $('#cart')[0].hidden === false) {
          $('#scroll-to-top-icon').removeClass('scroll-to-top');
        } else {
          $('#scroll-to-top-icon').addClass('scroll-to-top');
        }
      });

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

  getNomeStatusView( statusNumber: number ) {
    switch (statusNumber) {
      case 1: return 'DISPONÍVEL';
      case 2: return 'RESERVADO';
      case 3: return 'PAGO';
    }
    return '';
  }

  onAdd(event, numero: NumeroRifa) {
    if (numero.statusNum !== 1) {
      this.onShowComprador(numero);
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

  onShowComprador(numero: NumeroRifa) {
    this.numeroRifaService.loadById(numero.id).then( result => {
      this.numeroSelecionadoMostrar = result;
      $('#ownerModalConfirm').modal('show');
    });
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
    this.ordemDeCompra.idRifa = this.rifa.id;
    this.ordemDeCompra.numerosObj = this.numerosSelecionados;
    this.ordemDeCompra.idNumeros = this.ordemDeCompra.numerosObj.map(n => n.id);
    this.ordemDeCompra.valorTotal = this.rifa.valor * this.ordemDeCompra.idNumeros.length;

    this.ordemDeCompraService.save(this.ordemDeCompra).then(result => {
      if (result) {
        // EMAIL TO ADMIN ACTION!!
        // TODO

        $('#purchaseModal').modal('hide');
        $('#purchaseModalConfirm').modal('show');
      } else {
        alert('Ops...Ocorreu um erro, por favor, tente novamente.');
      }
    }).finally(() => {

    });

  }

  onWhatsAppAction() {
    // WHATSAPP CLIENT ACTION!!
    window.open(
      'https://api.whatsapp.com/send?lang=pt_br&phone=+551130428499&text='
      + 'Rifa: ' + this.rifa.descricao
      + '%0ANúmero(s) Comprado(s): ' + this.ordemDeCompra.numerosObj.map(n => this.getValorStr(n.valor)).join()
      + '%0AValor Total: R$ ' + this.ordemDeCompra.valorTotal + ',00'
      + '%0ANome: ' + this.ordemDeCompra.nome
      + '%0ACPF: ' + this.ordemDeCompra.cpf
      + '%0ATelefone: ' + this.ordemDeCompra.telefone,
      '_blank'
    );

    this.ngOnInit();
    this.onShowHideCart();
    $('#purchaseModalConfirm').modal('hide');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
