import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuNavegacaoComponent, TopoComponent, RodapeComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [MenuNavegacaoComponent, TopoComponent, RodapeComponent],
})
export class TemplateModule { }
