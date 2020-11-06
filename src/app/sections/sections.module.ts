import { BreadcrumbComponent } from './../sections/breadcrumb/breadcrumb.component';
import { VantagensComponent } from './vantagens/vantagens.component';
import { UltimosGanhadoresComponent } from './ultimos-ganhadores/ultimos-ganhadores.component';
import { UltimasRifasComponent } from './ultimas-rifas/ultimas-rifas.component';
import { SuporteComponent } from './suporte/suporte.component';
import { ComoParticiparComponent } from './como-participar/como-participar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComoParticiparComponent, SuporteComponent, UltimasRifasComponent, UltimosGanhadoresComponent, VantagensComponent, BreadcrumbComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    ComoParticiparComponent, SuporteComponent, UltimasRifasComponent, UltimosGanhadoresComponent, VantagensComponent, BreadcrumbComponent
  ],
})
export class SectionsModule { }
