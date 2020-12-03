import { environment } from './../../../environments/environment';
import { RifaService } from './../../services/rifa.service';
import { Rifa } from './../../core/model';
import { PagesBaseComponent } from './../../pages/pages-base/pages-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimas-rifas',
  templateUrl: './ultimas-rifas.component.html',
  styleUrls: ['./ultimas-rifas.component.scss']
})
export class UltimasRifasComponent extends PagesBaseComponent implements OnInit {

  ultimasRifas: Rifa[];

  constructor(private rifaService: RifaService) {
    super();
  }

  ngOnInit() {

    this.rifaService.listar3Ultimas().then( result => {
      this.ultimasRifas = result;
      this.ultimasRifas = this.ultimasRifas.map(r => {
        r.imagem = `${environment.apiUrl}/site/product-images/${r.imagem}`;
        return r;
      });
    });

  }

}
