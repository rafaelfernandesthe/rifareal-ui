import { RifaDetalheComponent } from './pages/rifa-detalhe/rifa-detalhe.component';
import { RifasPageComponent } from './pages/rifas-page/rifas-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: IndexPageComponent, pathMatch: 'full' },
  { path: 'rifas', component: RifasPageComponent },
  { path: 'rifa-detalhe/:codigo', component: RifaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
