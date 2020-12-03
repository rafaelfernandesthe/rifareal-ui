import { AdminManagementComponent } from './pages/admin-management/admin-management.component';
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
  { path: 'termos-condicoes', component: TermosCondicoesComponent },
  { path: 'politicas-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'admin-management', component: AdminManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
