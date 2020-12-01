import { ServicesModule } from './../services/services.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { SectionsModule } from './../sections/sections.module';
import { RifasPageComponent } from './rifas-page/rifas-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RifaDetalheComponent } from './rifa-detalhe/rifa-detalhe.component';
import { PagesBaseComponent } from './pages-base/pages-base.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './contato/contato.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './termos-condicoes/termos-condicoes.component';



@NgModule({
  declarations: [IndexPageComponent, RifasPageComponent, RifaDetalheComponent, PagesBaseComponent,
                ContatoComponent, PoliticaPrivacidadeComponent, TermosCondicoesComponent],
  imports: [
    CommonModule, RouterModule, SectionsModule, CoreModule, FormsModule, ServicesModule
  ]
})
export class PagesModule { }
