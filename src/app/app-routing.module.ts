import { RegrasSorteioComponent } from './pages/regras-sorteio/regras-sorteio.component';
import { ConfirmPurchasePageComponent } from './pages/admin-management/confirm-purchase-page/confirm-purchase-page.component';
import { NewRifaPageComponent } from './pages/admin-management/new-rifa-page/new-rifa-page.component';
import { PoliticaPrivacidadeComponent } from './pages/politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './pages/termos-condicoes/termos-condicoes.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { RifaDetalheComponent } from './pages/rifa-detalhe/rifa-detalhe.component';
import { RifasPageComponent } from './pages/rifas-page/rifas-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: IndexPageComponent, pathMatch: 'full' },
  { path: 'rifas', component: RifasPageComponent },
  { path: 'rifa-detalhe/:codigo', component: RifaDetalheComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'regras-sorteio', component: RegrasSorteioComponent },
  { path: 'termos-condicoes', component: TermosCondicoesComponent },
  { path: 'politicas-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'admin', redirectTo: '' },
  { path: 'admin99/new', component: NewRifaPageComponent },
  { path: 'admin99/confirmar', component: ConfirmPurchasePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
