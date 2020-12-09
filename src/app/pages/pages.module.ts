import { NewRifaPageComponent } from './admin-management/new-rifa-page/new-rifa-page.component';
import { ServicesModule } from './../services/services.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { SectionsModule } from './../sections/sections.module';
import { RifasPageComponent } from './rifas-page/rifas-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RifaDetalheComponent } from './rifa-detalhe/rifa-detalhe.component';
import { PagesBaseComponent } from './pages-base/pages-base.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './contato/contato.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './termos-condicoes/termos-condicoes.component';
import { ConfirmPurchasePageComponent } from './admin-management/confirm-purchase-page/confirm-purchase-page.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [IndexPageComponent, RifasPageComponent, RifaDetalheComponent, PagesBaseComponent,
                ContatoComponent, PoliticaPrivacidadeComponent, TermosCondicoesComponent, NewRifaPageComponent,
                ConfirmPurchasePageComponent],
  imports: [
    CommonModule, RouterModule, SectionsModule, CoreModule, FormsModule, ServicesModule, NgxMaskModule.forRoot(),
  ]
})
export class PagesModule { }
