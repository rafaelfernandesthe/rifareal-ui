import { OrdemDeCompraService } from './ordem-de-compra.service';
import { HttpClientModule } from '@angular/common/http';
import { RifaService } from './rifa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumeroRifaService } from './numero-rifa.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [RifaService, OrdemDeCompraService, NumeroRifaService]
})
export class ServicesModule { }
