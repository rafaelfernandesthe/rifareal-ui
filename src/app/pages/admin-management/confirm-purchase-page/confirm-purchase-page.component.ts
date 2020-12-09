import { OrdemDeCompraService } from './../../../services/ordem-de-compra.service';
import { RifaService } from './../../../services/rifa.service';
import { Rifa, OrdemDeCompra } from './../../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-purchase-page',
  templateUrl: './confirm-purchase-page.component.html',
  styleUrls: ['./confirm-purchase-page.component.scss']
})
export class ConfirmPurchasePageComponent implements OnInit {

  rifas: Rifa[] = [];
  compras: OrdemDeCompra[] = [];
  dadosForm: any = {
    rifaSelecionada: '',
    ordemDeCompraSelecionada: '',
    statusNovo: '',
  };
  todosStatus: string[] = ['DISPONIVEL', 'RESERVADO', 'COMPRADO'];

  constructor(private rifaService: RifaService, private ordemDeCompraService: OrdemDeCompraService) { }

  ngOnInit() {
    this.dadosForm = {
      rifaSelecionada: '',
      ordemDeCompraSelecionada: '',
      statusNovo: '',
    };
    this.rifaService.listarTodas().then(result => {
      this.rifas = result;
    });
  }

  onSelectedRifa(newValue) {
    this.dadosForm.rifaSelecionada = newValue;
    this.dadosForm.ordemDeCompraSelecionada = '';
    if (this.dadosForm.rifaSelecionada) {
      this.ordemDeCompraService.findByRifa(this.dadosForm.rifaSelecionada.id).then(result => {
        this.compras = result;
      });
    }
  }

  onSelectedCompra(newValue) {
    this.dadosForm.statusNovo = newValue;
  }

  onSavePay() {
    this.dadosForm.ordemDeCompraSelecionada.novoStatus = this.dadosForm.statusNovo;
    this.ordemDeCompraService.savePay(this.dadosForm.ordemDeCompraSelecionada).then(result => {
      console.log(result);
      if (result) {
        alert('Atualizado com sucesso!');
        this.ngOnInit();
      } else {
        alert('ERRO! Verifique o log');
      }
    });
  }

}
